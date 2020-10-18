import React from 'react';

import useStyles from './style';

import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

function SectionMobile(props) {

    const classes = useStyles();

    function handleMobileMenuOpen(e) {
        props.handleMobileMenuOpen(e);
    };

    return (
        <div className={classes.sectionMobile}>
            <IconButton
                aria-label="show more"
                aria-controls={props.mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
            >
                <MoreIcon />
            </IconButton>
        </div>
    )
}

export default SectionMobile;