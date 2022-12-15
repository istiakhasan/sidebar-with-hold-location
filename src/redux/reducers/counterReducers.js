const initialValues={
    value:0,
    product:[],
    cart:[]
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
    }

}


export default CounterReducers