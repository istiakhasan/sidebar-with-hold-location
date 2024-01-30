import axios from "axios"
import actionType from "../actionTypes/actionTypes"
import { baseUrs } from "../../helpers/config/config.Env"



const fetchRoute=(email)=>{
    return async(dispatch,getState)=>{
        try {
            const res=await axios.get(`${baseUrs()}/routelisttwo?email=${email}`)
            dispatch({type:actionType.LOAD_ROUTES,payload:res?.data?.data})

        } catch (error) {
            console.log(error)
        }
    }
}

export default fetchRoute