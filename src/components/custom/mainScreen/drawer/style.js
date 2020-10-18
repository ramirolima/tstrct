import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  hide: {
    display: 'none',
  },
  invisible: {
    color: 'transparent',
  },
  drawer: {
    whiteSpace: 'nowrap',
  },
  drawerFloat: {
    position: 'absolute',
    zIndex: 1,
  },
  drawerOpen: {
    width: drawerWidth,
    height: '100%',
    backgroundColor: theme.palette.joker.main,
    border: 'none',
    display: 'block',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: 200,
    }),
    boxShadow: '3px 0px 4px -1px rgba(0,0,0,0.2), 3px 0px 5px 0px rgba(0,0,0,0.14), 3px 0px 10px 0px rgba(0,0,0,0.12)',
    overflowX: 'hidden',
    overflowY: 'hidden',
    '&:hover': {
      overflowY: 'auto',
    },
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  drawerClose: {
    display: 'block',
    backgroundColor: theme.palette.joker.main,
    borderColor: theme.palette.details,
    overflowX: 'hidden',
    overflowY: 'hidden',
    '&:hover': {
      overflowY: 'auto',
    },
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    width: 45,
      // [theme.breakpoints.down('xs')]: {
      //   display: 'none',
      // },
  },
  drawerTransition: {
    display: 'block',
    backgroundColor: 'transparent',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: 200,
    }),
  },
  list: {
    backgroundColor: theme.palette.joker.main,
    color: theme.palette.text.joker,
    marginTop: '25px',
  },
  item: {
    fontStyle: 'italic',
    marginRight: '10px',
    borderBottomRightRadius: '50px',
    borderTopRightRadius: '50px',
    width: '95%',
    height: '35px',
    paddingLeft: '12px',
    color: theme.palette.text.joker,
    '&:hover': {
      color: theme.palette.textHover.joker + '!important',
    },
  },
  itemSelected: {
    backgroundColor: theme.palette.secondary.main
  },
  itemIcon: {
    color: theme.palette.text.joker,
    fontSize: '17px',
  },
  itemIconSelected: {
    marginTop: '3px',
    color: theme.palette.text.secondary,
  },
  itemIconSelectedOpen: {
    marginTop: '5px'
  },
  itemText: {
    marginTop: '6px',
    marginLeft: '-85px',
  },
  itemTextSelected: {
    color: theme.palette.text.secondary,
  },
  iconUpDown: {
    fontSize: '18px',
    marginTop: '5px',
  },
  subItemIcon: {
    marginRight: '10px',
    fontSize: '8px'
  },
  subItemText: {
    marginLeft: '15%',
    verticalAlign: 'middle'
  },
  subItemTextSelected: {
    color: theme.palette.text.secondary,
  },
  itemColorHover: {
    '&:hover': {
      color: theme.palette.text.joker,
    },
  }
}))

export default useStyles;