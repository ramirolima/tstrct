import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { setDrawerControl, setDrawerFloat, setDrawerTransition } from 'fluxArchiteture/actions/general/general_action';

import clsx from 'clsx';
import useStyles from './style';
import {
  FadeInDiv2,
  FadeInDiv1,
} from 'utils/transitions'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Slide from '@material-ui/core/Slide';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


import InfUserClose from "./infUserClose";
import InfUserOpen from "./infUserOpen";
import { itensMenu } from 'utils/itensMenu';
import {
  BsChevronUp,
  BsChevronDown
} from 'react-icons/bs';

export default function DrawerMain(props) {

  //#region -- Variables --

  const classes = useStyles();
  const dispatch = useDispatch();
  const drawerControl = useSelector(state => state.general.drawerControl)
  const drawerControlFix = useSelector(state => state.general.drawerControlFix)
  const drawerFloat = useSelector(state => state.general.drawerFloat)
  const drawerTransition = useSelector(state => state.general.drawerTransition)
  const [collapseControl, setCollapseControl] = useState(-1);
  const [itemSelected, setItemSelected] = useState([-1, -1]);
  const infUser = drawerControl ? <InfUserOpen /> : <InfUserClose />

  //#endregion

  //#region  -- Functions --

  function handleDrawerControl(status) {
    if (!drawerControlFix) {
      dispatch(setDrawerControl(status))
      dispatch(setDrawerFloat(status))
      dispatch(setDrawerTransition(false))
    }
  }

  function validateSelection(itemMenu) {
    if (drawerControl) {
      if (itemSelected[1] === itemMenu.id)
        return true;
      else if (!(itemMenu.itens === undefined))
        if (!(itemMenu.itens.length > 0))
          if (itemSelected[0] === itemMenu.id)
            return true
    }
    else
      if (itemSelected[0] === itemMenu.id)
        return true;

    return false;
  }

  function handleMenuControl(itemMenu) {
    if (!(itemMenu.itens === undefined)) {
      if (!(itemMenu.itens.length > 0))
        setItemSelected([itemMenu.id, -1]);
      else
        if (collapseControl !== itemMenu.id)
          setCollapseControl(itemMenu.id);
        else
          setCollapseControl(-1);
    }
    else
      setItemSelected([collapseControl, itemMenu.id]);
  }

  //#endregion

  //#region  -- Component --

  return (
    <Drawer
      variant={'permanent'}
      className={clsx(classes.drawer, {
        [classes.drawerFloat]: drawerFloat,
        [classes.drawerOpen]: drawerControl,
        [classes.drawerClose]: !drawerControl,
        [classes.drawerTransition]: drawerTransition,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: drawerControl,
          [classes.drawerClose]: !drawerControl,
        }),
      }}
      open={drawerControl}
      onMouseEnter={() => handleDrawerControl(true)}
      onMouseLeave={() => handleDrawerControl(false)}
    >

      <div className={classes.toolbar}>{infUser}</div>
      {/* <Divider /> */}

      <List className={classes.list}>
        {
          itensMenu.map((itemMenu) => (
            <Fragment>
              <Link to={itemMenu.route}>
                <ListItem
                  className={clsx(classes.item, {
                    [classes.itemSelected]: validateSelection(itemMenu),
                  })}
                  button key={itemMenu.id} onClick={() => handleMenuControl(itemMenu)}>
                  <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start">

                    <FadeInDiv2>
                      <ListItemIcon className={clsx(classes.itemIcon, {
                        [classes.itemIconSelected]: validateSelection(itemMenu),
                        [classes.itemIconSelectedOpen]: drawerControl,
                      })}>
                        {itemMenu.icon}
                      </ListItemIcon>
                    </FadeInDiv2>

                    <Slide in={drawerControl} unmountOnExit>
                      <FadeInDiv1>
                        <ListItemText
                          className={clsx({
                            [classes.hide]: !drawerControl,
                            [classes.itemText]: drawerControl,
                            [classes.itemTextSelected]: validateSelection(itemMenu),
                          })} >
                          <Typography variant="body1">{itemMenu.text}</Typography>
                        </ListItemText>
                      </FadeInDiv1>
                    </Slide>

                    <div
                      className={clsx(classes.iconUpDown, {
                        [classes.hide]: !drawerControl,
                        [classes.invisible]: !(itemMenu.itens.length > 0),
                      })}
                    >
                      {(collapseControl === itemMenu.id) ?
                        <BsChevronUp style={{ fontSize: '9px' }} />
                        :
                        <BsChevronDown style={{ fontSize: '9px' }} />
                      }
                    </div>
                  </Grid>
                </ListItem>
              </Link>

              {itemMenu.itens.map((subMenu) =>
                (drawerControl) &&
                <Collapse in={collapseControl === itemMenu.id} unmountOnExit>
                  <FadeInDiv1>
                    <Link to={subMenu.route}>
                      <List component="div" disablePadding>
                        <ListItem
                          button key={subMenu.id} onClick={() => handleMenuControl(subMenu)}
                          className={clsx(classes.item, {
                            [classes.itemSelected]: validateSelection(subMenu)
                          })}>
                          <ListItemText
                            className={clsx(classes.subItemText, {
                              [classes.subItemTextSelected]: validateSelection(subMenu)
                            })}>
                            {subMenu.icon}
                            {subMenu.text}
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Link>
                  </FadeInDiv1>
                </Collapse>
              )}
            </Fragment>
          ))
        }
      </List>
    </Drawer >
  )

  //#endregion

}