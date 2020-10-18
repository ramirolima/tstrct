import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menuItem: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.hover,
      color: theme.palette.textHover.primary,
    },
  },
}));

export default useStyles; 