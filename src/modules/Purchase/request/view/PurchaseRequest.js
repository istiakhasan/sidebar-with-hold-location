import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import MainLayout from '../../../../common/MainLayout';

const PurchaseRequest = () => {
    const params=useParams()
   const location=useLocation()
   console.log(location,"location",params)
    return (
        <MainLayout>
            <h6>purchase request </h6>
        </MainLayout>
    );
};

export default PurchaseRequest;