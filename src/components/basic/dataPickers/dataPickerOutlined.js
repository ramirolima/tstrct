import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';

import MomentUtils from '@date-io/moment';
import {
    DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider,
    KeyboardTimePicker
} from "@material-ui/pickers";


import moment from "moment";
import "moment/locale/pt-br";
moment.locale('pt-br');

function DataPickerOutlined(props) {
    const classes = props.style();
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
                color="secondary"
                size="small"
                disableFuture={props.disableFuture}
                disablePast={props.disablePast}
                fullWidth
                invalidDateMessage='Formato inválido'
                orientation={props.width === 'xs' ? 'portrait' : 'landscape'}
                autoOk
                variant="inline"
                inputVariant="outlined"
                label={<div className={classes.cssLabel}>{props.label}</div>}
                format="DD/MM/YYYY"
                value={selectedDate}
                InputAdornmentProps={{ position: "start", shrink: true, }}
                InputProps={{
                    classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                    },
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.rootLabel,
                    },
                }}

                onChange={date => handleDateChange(date)}
            />
        </MuiPickersUtilsProvider>
    )
}

DataPickerOutlined.defaultProps = {
    label: 'Data',
    disableFuture: false,
    disablePast: false,
    style: makeStyles(theme => ({
        cssLabel: {
            color: theme.palette.text.mainColor + ' !important',
        },
        // cssFocused: {},
        cssOutlinedInput: {
            color: theme.palette.text.mainColor,
        },
    }))
};

DataPickerOutlined.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(DataPickerOutlined);