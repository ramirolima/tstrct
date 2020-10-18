import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { selectThemeAction } from 'fluxArchiteture/actions/general/general_action';
import { allThemes } from 'utils/theme/customThemes'

export default function Themes() {
    const classes = useStyles();
    let currentCategory = '';
    const [currentTheme, setCurrentTheme] = React.useState(0);
    const [timer, setTimer] = React.useState(0);

    const selectedTheme = useSelector(state => state.general.selectedTheme);

    const dispatch = useDispatch();

    useEffect(() => setCurrentTheme(selectedTheme), []);

    function selectTheme(name, temp) {
        if (temp === 0) { //enter selection
            setTimer(setTimeout(function () {
                dispatch(selectThemeAction(name));
            }, 500))
        }
        else if (temp === 1) { //exit selection
            clearTimeout(timer);
            dispatch(selectThemeAction(currentTheme));
        }
        else if (temp === 2) { //click selection
            dispatch(selectThemeAction(name));
            setCurrentTheme(name);
        }
    }

    return (
        <Grid container spacing={3} className={classes.root}>
            {allThemes.map((item) => (
                <Fragment>
                    {(item.category !== currentCategory) &&
                        <Grid item xs={12} sm={12} className={classes.category}
                            justify="space-between"
                            alignItems="flex-start"
                        >
                            <Typography variant='h6' className={classes.bold}> {item.category} </Typography>
                        </Grid>
                    }

                    {item.themes.map((theme) => {
                        return <div >
                            <Paper id={theme.name}
                                style={{
                                    backgroundImage: `url(${theme.thumb})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                                className={clsx(classes.paperItem,
                                    { [classes.paperItemSelected]: selectedTheme === theme.name })}
                                elevation={10}
                                onClick={() => selectTheme(theme.name, 2)}
                                onMouseEnter={() => selectTheme(theme.name, 0)}
                                onMouseLeave={() => selectTheme(theme.name, 1)}
                            >
                                {<div className={classes.label}>{theme.label}</div>}
                            </Paper>
                        </div>
                    })}
                </Fragment>
            ))}
        </Grid>
    )
}