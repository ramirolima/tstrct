import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './style';
import clsx from 'clsx';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SwipeableViews from 'react-swipeable-views';

import { useTheme } from '@material-ui/core/styles';

import TabPanel from 'components/reusable/tabPanel'

export default function VerticalTab(props) {
    const theme = useTheme();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function tabProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs"
                className={classes.tabs}
                scrollButtons='on'
            >
                {props.tabs.map((item) => {
                    return <Tab className={clsx(classes.itemTab, { [classes.selected]: value === item.index })} label={item.label} {...tabProps(item.index)} />
                })}
            </Tabs>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChange}
                className={classes.scroll}
            >
                {props.tabs.map((item) => {
                    return <TabPanel value={value} index={item.index}>
                        {item.panel}
                    </TabPanel>
                })}

            </SwipeableViews>
        </div>
    );
}

PropTypes.exact({
    index: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    panel: PropTypes.object.isRequired
});