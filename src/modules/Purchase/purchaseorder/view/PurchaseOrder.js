import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../../../common/MainLayout';

const PurchaseOrder = () => {
    const counter=useSelector(state=>state.CounterReducers) 
    const dispatch=useDispatch()
    console.log(counter,"counter")
    return (
        <MainLayout>
            <h6>Purchase order</h6>
            {counter.value} 
            <br />
            <Button variant='contained' onClick={()=>dispatch({type:"ADD_TO_CART"})}>+</Button>
        </MainLayout>
    );
};

export default PurchaseOrder;