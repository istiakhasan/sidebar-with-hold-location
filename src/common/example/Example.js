import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Example = () => {
    const {id,type}=useParams()
    const location=useLocation()
    console.log(id,type,location)
    return (
        <div>
            <small>Params and location check </small>
        </div>
    );
};

export default Example;