import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setDrawerControl, setDrawerControlFix } from 'fluxArchiteture/actions/general/general_action';

import clsx from 'clsx';
import useStyles from './style';
import { logo } from 'utils/baseImages';
import {
    FadeInDiv1,
    FlashDiv3,
    BounceInDownDiv1
} from 'utils/transitions';

import {
    BsList,
    BsSearch,
} from "react-icons/bs";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';

import MenuMobile from './menuMobile';
import SectionDesktop from './sectionDesktop';
import SectionMobile from './sectionMobile';

export default function PrimarySearchAppBar(props) {

    //#region -- Variables --

    const classes = useStyles();
    const dispatch = useDispatch();
    const drawerControl = useSelector(state => state.general.drawerControl);

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [numberMessages, setNumberMessages] = React.useState(14);
    const [numberNotifications, setNumberNotifications] = React.useState(5);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    //#endregion

    //#region -- Functions --

    function handleDrawerControl(status) {
        dispatch(setDrawerControl(status))
        dispatch(setDrawerControlFix(status))
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <MenuMobile
            handleMobileMenuClose={handleMobileMenuClose}
            mobileMoreAnchorEl={mobileMoreAnchorEl}
            mobileMenuId={mobileMenuId}
            isMobileMenuOpen={isMobileMenuOpen}
            numberMessages={numberMessages}
            numberNotifications={numberNotifications}
        />
    );

    //#endregion

    //#region -- Component --

    return (
        <div>
            <AppBar position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: drawerControl,
                })}>
                <Toolbar>
                    <BounceInDownDiv1>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => handleDrawerControl(true)}
                            className={clsx(classes.menuButton, {
                                [classes.hide]: drawerControl,
                            })}
                        >
                            <BsList />
                        </IconButton>

                    </BounceInDownDiv1>

                    <FlashDiv3>
                        <Link to="/main">
                            <img src={logo}
                                className={clsx(classes.imgLogo, {
                                    [classes.hide]: drawerControl,
                                })}
                            />
                        </Link>
                    </FlashDiv3>


                    <FadeInDiv1>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <BsSearch/>
                            </div>
                            <InputBase
                                placeholder="Pesquisar"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </FadeInDiv1>

                    <div className={classes.grow} />
                    <SectionDesktop
                        numberMessages={numberMessages}
                        numberNotifications={numberNotifications}
                    />
                    <SectionMobile
                        mobileMenuId={mobileMenuId}
                        handleMobileMenuOpen={handleMobileMenuOpen}
                    />
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div >
    );

    //#endregion

}