import React from 'react';
import useStyles from './style';
import { Typography } from '@material-ui/core';
import HorizontalTab from '../horizontalTabFull';

function TemplateSearch(props) {

    const classes = useStyles();

    return (
        <div className={classes.containerTab}>
        Searching...
        </div>
    )
}

export default TemplateSearch;