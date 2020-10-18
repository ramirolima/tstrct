import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {
  setDrawerControl,
  setDrawerControlFix,
  setDrawerTransition
} from 'fluxArchiteture/actions/general/general_action';

import useStyles from './style';
import { logo, profile } from 'utils/baseImages';
import {
  BounceInLeftDiv05,
  FadeInDiv2,
  FlashDiv2,
} from 'utils/transitions';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { BsChevronLeft } from 'react-icons/bs';

function InfUserOpen(props) {

  const classes = useStyles();
  const dispatch = useDispatch();

  function handleDrawerControl(status) {
    dispatch(setDrawerControl(status))
    dispatch(setDrawerControlFix(status))
    dispatch(setDrawerTransition(true))
  }

  return (
    <Grid
      container spacing={0}
      className={classes.gridContainer}
      direction="row"
      justify="center"
    >
      <Grid item xs={12} className={classes.background}>
        <Grid
          container
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={6}>
            <FlashDiv2>
              <Link to="/main">
                <img src={logo} className={classes.imgLogo} />
                <div className={classes.nameEmp}>
                  <Typography variant='subtitle1'>
                    R1 System
                  </Typography>
                </div>
              </Link>
            </FlashDiv2>
          </Grid>

          <Grid>
            <IconButton
              className={classes.btnCloseMenu}
              onClick={() => handleDrawerControl(false)}
            >
              <BsChevronLeft style={{fontSize: '14px'}} />
            </IconButton>
          </Grid>
        </Grid>

        <FadeInDiv2>
          <Grid item xs={12} container spacing={0}
            justify="center">
            <div>
              <Typography variant='subtitle1' className={classes.dataInf}>
                Ramiro Lima
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} container spacing={0}
            justify="center">
            <div>
              <Typography variant='caption' className={classes.dataInfProfile}>
                Administrador
              </Typography>
            </div>
          </Grid>
        </FadeInDiv2>
      </Grid>

      <Grid item xs={12} className={classes.containerData}>
        <Grid className={classes.containerImageProfile}>
          <BounceInLeftDiv05>
            <img src={profile} className={classes.imageProfile} />
          </BounceInLeftDiv05>
        </Grid >
      </Grid >
    </Grid>
  )
}

export default InfUserOpen;