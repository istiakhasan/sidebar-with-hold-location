const initialValues={
    value:0,
    product:[],
    cart:[],
    menuToggle:true
}



const CounterReducers=(state=initialValues,action)=>{


    switch(action.type){
        case "ADD_TO_CART":
            return {...state,value:state.value+1}
        default: 
        case "PRODUCT_LOAD":
        return {
            ...state,
            product:action.payload
        }
        case "TOGGLE_BAR":
        return {
            ...state,
            menuToggle:!state.menuToggle
        }
        case "TOGGLE_AUTO":
        return {
            ...state,
            menuToggle:false
        }
        case "TOGGLE_CLOSE":
        return {
            ...state,
            menuToggle:true
        }
    }

}


export default CounterReducers