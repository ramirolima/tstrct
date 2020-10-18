import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './style.js';

function ContainerSideBySide(props) {  
    const classStyle = useStyles();  

    return (
    <Grid container direction="row" alignItems="center" className={classStyle.gridContainer}>
        <Grid item xs={props.leftSizing} className={classStyle.gridLeft}>
            {props.left}
        </Grid> 
        <Grid item xs={props.rightSizing}>
            {props.right}
        </Grid>     
    </Grid>
    )
}

export default ContainerSideBySide;