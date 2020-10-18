import React from 'react';
import useStyles from './style';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

function ContentMain(props) {
  const classes = useStyles();
  const drawerFloat = useSelector(state => state.general.drawerFloat)

  return (
    <main className={clsx(classes.content,{[classes.contentDrawerFloat]: drawerFloat})}>
      <div className={classes.toolbar} />
      {props.children}
    </main>
  )
}

export default ContentMain;