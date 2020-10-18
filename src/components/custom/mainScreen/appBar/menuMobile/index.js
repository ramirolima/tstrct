import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './style';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import {
    BsEnvelope,
    BsBell,
    BsBoxArrowDownRight,
} from "react-icons/bs";

function MenuMobile(props) {
    const classes = useStyles();

    function handleMobileMenuClose(e) {
        props.handleMobileMenuClose(e.target.value);
    };

    return (
        <Menu
            anchorEl={props.mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={props.mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={props.isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            className={classes.menu}

        >
            <MenuItem className={classes.menuItem}>
                <IconButton aria-label="show new mails" color="inherit">
                    <Badge badgeContent={props.numberMessages} color="secondary">
                    <BsEnvelope />
                    </Badge>
                </IconButton>
                <p>Mensagens</p>
            </MenuItem>
            <Divider/>
            <MenuItem className={classes.menuItem}>
                <IconButton aria-label="show new notifications" color="inherit">
                    <Badge badgeContent={props.numberNotifications} color="secondary">
                    <BsBell />
                    </Badge>
                </IconButton>
                <p>Notificações</p>
            </MenuItem>
            <Divider/>
            <Link to="/">
                <MenuItem className={classes.menuItem}>
                    <IconButton aria-label="Exit to app" color="inherit">
                    <BsBoxArrowDownRight/>
                    </IconButton>
                    <p>Sair</p>
                </MenuItem>
            </Link>
        </Menu>
    )
}

export default MenuMobile;