import axios from "axios"
import actionType from "../actionTypes/actionTypes"

const fetchDistrict=()=>{
    return async(dispatch,getState)=>{
      const res=await axios.get(`http://localhost:8080/api/v1/district`)
    console.log(res)
     if(res?.data?.data?.length){
       const modifieData=res?.data?.data?.map(item=>({label:item.name,value:item.id}))
       console.log(modifieData);
        dispatch({type:actionType.LOAD_DISTRICT,payload:modifieData})
     }
      
    }
}

export default fetchDistrict