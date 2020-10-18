import React from 'react';
import clsx from 'clsx';
import useStyles from './style';
import { profile } from 'utils/baseImages';
import Typography from '@material-ui/core/Typography';

import {
    FadeInDiv2,
    SlideInRightDiv05
} from 'utils/transitions'

function InfUserClose(props) {
    const classes = useStyles();
    return (
        <div className={classes.divContainer}>
            <div className={classes.divContent}>
                <SlideInRightDiv05><img src={profile} className={classes.imgProfile} /></SlideInRightDiv05>
            </div>
        </div>
    )
}

export default InfUserClose;