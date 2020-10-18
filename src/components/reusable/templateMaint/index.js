import React from 'react';
import useStyles from './style';
import { Typography } from '@material-ui/core';
import HorizontalTab from '../horizontalTabFull';
import { useSelector } from 'react-redux';

import clsx from 'clsx';

function TemplateMaint(props) {

    const classes = useStyles();
    const drawerControl = useSelector(state => state.general.drawerControl);
    const drawerControlFix = useSelector(state => state.general.drawerControlFix);

    return (
        <div className={classes.root} >
            <div className={classes.divBanner} />
            <div className={classes.divInf}>
                <Typography variant="h6">
                    <div className={classes.divInfItem}>{props.icon}</div>
                    <div className={classes.divInfItem}>{props.title}</div>
                </Typography>
            </div>
            <div
                className={clsx(classes.divContent, { [classes.divContentMin]: drawerControl && drawerControlFix })}  >
                <HorizontalTab tabs={props.tabs} height='71vh' />
            </div>
        </div>

    )
};

export default TemplateMaint