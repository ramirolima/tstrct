import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gridLeft: {
    backgroundColor: theme.palette.primary.main,
    background: theme.palette.gradient,
    borderBottomRightRadius: '40px',
    borderTopRightRadius: '40px',
  },
  gridContainer: {
    backgroundColor: theme.palette.backgroundOut,
  },
}));

export default useStyles;
