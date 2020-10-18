import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    divContainer: {
        position: 'relative',
        height: '220px',
        color: theme.palette.text.combination,
        backgroundColor: theme.palette.combination.main,
    },
    divContent: {
        position: 'absolute',
        bottom: '0px',
        left: '0.5vw',
        marginBottom: '20px',
    },
    imgProfile: {
        height: '35px',
        width: '35px',
    },
}));

export default useStyles;