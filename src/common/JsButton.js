import { Button } from '@mui/material';
import React from 'react';

const JsButton = (props) => {
    return (<Button  className='common-mui-button'   {...props}>{props.children}</Button> );
};

export default JsButton;