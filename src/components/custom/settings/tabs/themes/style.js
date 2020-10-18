import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(2),
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
        minWidth: 0
    },
    category: {
        height: theme.spacing(4),
        padding: 0,
        marginLeft: -15,
        marginBottom: 20,
        color: theme.palette.text.components,
    },
    bold: {
        fontWeight: 'bold'
    },
    paperItem: {
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        color: theme.palette.text.components,
        opacity: '0.4',
        transitionProperty: ['opacity','width', 'height', 'margin'],
        transitionDuration: '0.3s',
        width: 100,
        height: 100,
        border: 'none',

        '&:hover': {
            opacity: 1,
            border: 'none',
            width: 120,
            height: 120,
            marginTop: -10,
            marginBottom: -1,
            marginLeft: -10,
            borderRadius: 15,
        },
    },
    paperItemSelected: {
        opacity: 1,
        border: 'ridge 1px',
        borderColor: theme.palette.secondary.main,
        width: 120,
        height: 120,
        marginTop: -10,
        marginBottom: -1,
        marginLeft: -10,
        borderRadius: 100,
    },
    label: {
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 20,
        background: 'rgba(255,255,255,1)',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'justify'
    },
}));

export default useStyles;