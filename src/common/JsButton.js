import { Button } from '@mui/material';
import React from 'react';

const JsButton = (props) => {
    return (<Button {...props}>{props.children}</Button> );
};

export default JsButton;