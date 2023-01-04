import axios from "axios"
import actionType from "../actionTypes/actionTypes"

const fetchDistrict=()=>{
    return async(dispatch,getState)=>{
      const res=await axios.get(`http://localhost:8080/api/v1/district`)
      const data=await res.json() 
     if(data?.data?.length){
        dispatch({type:actionType.LOAD_DISTRICT,payload:data?.data})
     }
      
    }
}

export default fetchDistrict