import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

function SelectOutlined(props) {
    const classes = props.style();

    return (
        <FormControl
            size="small"
            color={props.colorTheme}
            fullWidth
            variant="outlined"
        >
            <InputLabel htmlFor="outlined-age-native-simple" className={classes.cssLabel}>{props.label}</InputLabel>
            <Select
                // value={state.age}
                // onChange={handleChange}
                className={classes.select}
                label={props.label}
            >
                <option className={classes.option} aria-label="None" value="" />
                {props.options.map((value) =>
                    <option className={classes.option} value={value}>{value}</option>
                )}
            </Select>
        </FormControl>
    )
}

SelectOutlined.defaultProps = {
    colorTheme: 'secondary',
    options: [],
    label: 'Label',
    style: makeStyles(theme => ({
        cssLabel: {
            color: theme.palette.text.mainColor + ' !important',
        },
        select: {
            color: theme.palette.text.components,
        },
        option: {
            background: theme.palette.components.main,
            color: theme.palette.text.components,
            padding: 10,
            '&:hover': {
                backgroundColor: theme.palette.components.hover,
            },
        }
    }))
};

export default SelectOutlined;