import axios from "axios"
import actionType from "../actionTypes/actionTypes"
import { baseUrs } from "../../helpers/config/config.Env"

const fetchDistrict=()=>{
    return async(dispatch,getState)=>{
      const res=await axios.get(`${baseUrs()}/district`)

     if(res?.data?.data?.length){
       const modifieData=res?.data?.data?.map(item=>({label:item.name,value:item.id}))

        dispatch({type:actionType.LOAD_DISTRICT,payload:modifieData})
     }

    }
}

export default fetchDistrict