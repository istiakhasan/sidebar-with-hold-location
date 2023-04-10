import axios from "axios"
import actionType from "../actionTypes/actionTypes"

const fetchRoute=()=>{
    return async(dispatch,getState)=>{
        try {
            const res=await axios.get(`http://localhost:8080/api/v1/routelisttwo`)
            dispatch({type:actionType.LOAD_ROUTES,payload:res?.data?.data})

        } catch (error) {
            console.log(error)
        }
    }
}

export default fetchRoute