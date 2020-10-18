import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingBottom: 0,
    color: theme.palette.text.mainColor,
  },
  contentDrawerFloat: {
    marginLeft: 45,
    // [theme.breakpoints.down('xs')]: {
    //   marginLeft: -45,
    // },
  },
}));

export default useStyles;