import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        margin: '15px',
        height: '50px',
        width: '35vw',
    },
    textField: {
        height: '50px',
        width: '35vw',
    },
    divForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divContainer: {
        textAlign: 'center',
    },
    icon: {
        height: '4vw',
        width: '4vw',
        minHeight: '25px',
        minWidth: '25px',
        margin: '10px',
    },
    msgTitleAccount: {
        color: theme.palette.primary.main,
        fontSize: '30px',
        fontWeight: 'bold',
        margin: '0px',
    },
    msgDecision: {
        color: 'Gray',
        fontSize: '15px',
    },
}));

export default useStyles;