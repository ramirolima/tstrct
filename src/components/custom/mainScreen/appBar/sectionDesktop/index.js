import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './style';
import {
    FadeInDiv1,
    FadeInDiv2,
    FadeInDiv3
} from 'utils/transitions';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import {
    BsEnvelope,
    BsBell,
    BsGear,
    BsBoxArrowDownRight
} from 'react-icons/bs';

function SectionDesktop(props) {

    const classes = useStyles();

    return (
        <div className={classes.sectionDesktop}>
            <IconButton aria-label="show new mails" color="inherit">
                <FadeInDiv1>
                    <Badge badgeContent={props.numberMessages} color="secondary">
                        <BsEnvelope />
                    </Badge>
                </FadeInDiv1>
            </IconButton>
            <IconButton aria-label="show new notifications" color="inherit">
                <FadeInDiv2>
                    <Badge badgeContent={props.numberNotifications} color="secondary">
                        <BsBell />
                    </Badge>
                </FadeInDiv2>
            </IconButton>
            <Link to="/main/settings">

                <IconButton aria-label="show configuration screen" className={classes.colorLink}>
                    <FadeInDiv3>
                        <BsGear />
                    </FadeInDiv3>
                </IconButton>
            </Link>
            <Link to="/">
                <IconButton aria-label="Exit to app" className={classes.colorLink}>
                    <FadeInDiv3>
                        <BsBoxArrowDownRight />
                    </FadeInDiv3>
                </IconButton>
            </Link>
        </div>
    )
}

export default SectionDesktop;