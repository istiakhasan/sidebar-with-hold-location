import { Button } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchUserDAta from '../../../../redux/thunk/fetchUsers';

const PurchaseOrder = () => {
    const counter=useSelector(state=>state.CounterReducers) 
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(fetchUserDAta())
    },[dispatch])
    return (
        <>
            <h6>Purchase order</h6>
            {counter.value} 
            <br />
            <Button variant='contained' onClick={()=>dispatch({type:"ADD_TO_CART"})}>+</Button>
        </>
    );
};

export default PurchaseOrder;