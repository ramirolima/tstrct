import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

function TextFieldOutlined(props) {
    const classes = props.style();

    return (
        <TextField
            variant="outlined"
            fullWidth
            size="small"
            color={props.colorTheme}
            className={classes.input}
            InputLabelProps={{
                classes: {
                    root: classes.rootLabel,
                },
            }}
            InputProps={{
                classes: {
                    root: classes.rootInput,
                },
            }}
            id={props.label}
            label={props.label}
        />
    )
}

TextFieldOutlined.defaultProps = {
    colorTheme: 'secondary',
    label: 'Digite aqui',
    style: makeStyles(theme => ({
        rootLabel: {
            color: theme.palette.text.mainColor + ' !important',
        },
        rootInput: {
            color: theme.palette.text.components,
        },
    }))
};

export default TextFieldOutlined;