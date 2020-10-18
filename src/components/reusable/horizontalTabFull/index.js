import React from 'react';
import useStyles from './style';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../tabPanel/index';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';

function tabProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function HorizontalTab(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} >
        <AppBar position="static" color="transparent" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            scrollButtons="on"
            variant={props.width === 'lg' || props.width === 'md' ? 'fullWidth' : 'scrollable'}
            aria-label="full width tabs"
          >
            {props.tabs.map((item) => {
              return <Tab
                className={clsx(classes.tab, {
                  [classes.tabSelected]: value === item.index,
                })}
                label={<div
                  className={clsx(classes.fontTab, {
                    [classes.fontTabSelected]: value === item.index,
                  })}>
                  {item.label}
                </div>} {...tabProps(item.index)} />
            })}
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs={12} className={clsx(classes.containerTab)} style={{ minHeight: props.height, maxHeight: props.height }} >
        {props.tabs.map((item) => {
          return <TabPanel value={value} index={item.index}>
            {item.panel}
          </TabPanel>
        })}
      </Grid>
    </Grid>
  );
}

HorizontalTab.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
export default withWidth()(HorizontalTab);