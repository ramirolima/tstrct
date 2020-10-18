import React, { Fragment, useState } from 'react';
import useStyles from './style';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { profile } from 'utils/baseImages';
import TextFieldOutlined from 'components/basic/textFields/textFieldOutlined';
import SelectOutlined from 'components/basic/selects/selectOutlined';
import DataPickerOutlined from 'components/basic/dataPickers/dataPickerOutlined'
import { useSelector } from 'react-redux';
import clsx from 'clsx';

function TabPersonalData(props) {

    const classes = useStyles();
    const drawerControl = useSelector(state => state.general.drawerControl)
    const drawerControlFix = useSelector(state => state.general.drawerControlFix)

    return (
        <form className={classes.formContainer} autoComplete="off">
            <Grid container direction="row" justify="space-between" alignItems="flex-start">
                <Grid container direction="row" xs={12} sm={12} md={drawerControl && drawerControlFix ? 12 : 6} lg={6} justify="space-between" alignItems="flex-start">

                    <Grid item xs={12} sm={12} md={drawerControl && drawerControlFix ? 12 : 3} lg={3}>
                        <Grid style={{ margin: '10px' }} container alignItems="center" justify="center" className={classes.containerImgProfile}>
                            <img src={profile} className={classes.imgProfile} />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={drawerControl && drawerControlFix ? 12 : 9} lg={9}>
                        <Grid container direction="row" xs={12} sm={12} md={12} lg={12} justify="space-between" alignItems="flex-start">
                            <Grid style={{ padding: '10px' }} item xs={12}>
                                <TextFieldOutlined colorTheme={'secondary'} label={'Nome'} />
                            </Grid>
                        </Grid>

                        <Grid container direction="row" xs={12} sm={12} md={12} lg={12} justify="space-between" alignItems="flex-start">
                            <Grid style={{ padding: '10px' }} item xs={12} sm={drawerControl && drawerControlFix ? 12 : 6} md={6} >
                                <TextFieldOutlined colorTheme={'secondary'} label={'Cpf'} />
                            </Grid>
                            <Grid style={{ padding: '10px' }} item xs={12} sm={drawerControl && drawerControlFix ? 12 : 6} md={6} >
                                <TextFieldOutlined colorTheme={'secondary'} label={'Rg'} />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid container direction="row" xs={12} sm={12} md={drawerControl && drawerControlFix ? 12 : 6} lg={6} justify="space-between" alignItems="flex-start">

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Grid container direction="row" xs={12} sm={12} md={12} lg={12} justify="space-between" alignItems="flex-start">
                            <Grid style={{ padding: '10px' }} item xs={12} sm={drawerControl && drawerControlFix ? 12 : 6} md={6}>
                                <DataPickerOutlined />
                            </Grid>
                            <Grid style={{ padding: '10px' }} item xs={12} sm={drawerControl && drawerControlFix ? 12 : 6} md={6}>
                                <SelectOutlined
                                    label={'Sexo'}
                                    options={['Feminino', 'Masculino', 'Outros']}
                                    colorTheme={'secondary'}
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" xs={12} sm={12} md={12} lg={12} justify="space-between" alignItems="flex-start">
                            <Grid style={{ padding: '10px' }} item xs={12} sm={drawerControl && drawerControlFix ? 12 : 6} md={6}>
                                <SelectOutlined
                                    label={'Categoria'}
                                    options={['Adm', 'User', 'Guest']}
                                    colorTheme={'secondary'}
                                />
                            </Grid>
                            <Grid style={{ padding: '10px' }} item xs={12} sm={drawerControl && drawerControlFix ? 12 : 6} md={6}>
                                <TextFieldOutlined colorTheme={'secondary'} label={'Rg'} />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </form >
    )
};

export default TabPersonalData