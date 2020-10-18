import React from 'react';
import useStyles from './style.js';
import { Container } from '@material-ui/core';

function CentralizedContainer(props) {  
    const classStyle = useStyles();  

    return (
        <Container maxWidth="sm" className={classStyle.container}> 
            <header className={classStyle.header}>   
                {props.children}
            </header> 
        </Container> 
    );
}

export default CentralizedContainer;