import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    colorLink: {
        color: theme.palette.text.primary,
    },
}));

export default useStyles;