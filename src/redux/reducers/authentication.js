import actionType from "../actionTypes/actionTypes";

const initialState={
    value:0,
    branch:[],
    selectedBranch:{}
}


const authReducer=(state=initialState,action)=>{
switch (action.type) {
    case actionType.LOAD_BRANCH:
        
       return {
        ...state,
        branch:action.payload
       }
    case actionType.SELECT_BRANCH:
        
       return {
        ...state,
        selectedBranch:action.payload
       }

    default:
        return state
}
}


export default authReducer