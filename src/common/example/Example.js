import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Example = () => {
    const {id,type}=useParams()
    const location=useLocation()
  
    return (
        <div>
            <small>Params and location check </small>
        </div>
    );
};

export default Example;