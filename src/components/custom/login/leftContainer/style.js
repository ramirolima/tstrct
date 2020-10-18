import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    divContainer: {
        textAlign: 'center',
    },
    imgLogo: {
        height: '15vmin',
        width: '15vmin',
        minHeight: '45px',
        minWidth: '45px',

        paddingBottom: '8vmin',
    },
    msgTitle: {
        color: theme.palette.secondary.main,
        fontSize: '30px',
        fontWeight: 'bold',
        margin: '0px',
    },
    msg: {
        align: 'center',
        color: 'white',
        lineHeight: '2',
        marginBottom: '50px',
    },
}));

export default useStyles;