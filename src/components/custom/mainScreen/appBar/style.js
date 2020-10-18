import { fade, makeStyles } from '@material-ui/core/styles';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    appBar: {
        color: theme.palette.text.primary,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'height', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: 200
        }),
        boxShadow: '4px 2px 4px -1px rgba(0,0,0,0.2), 4px 4px 5px 0px rgba(0,0,0,0.14), 4px 1px 10px 0px rgba(0,0,0,0.12)',
        height: '60px',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        height: '70px',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px'
    },
    hide: {
        display: 'none',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: '10px',
        backgroundColor: fade(theme.palette.details, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.details, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 150,
            '&:focus': {
                width: 350,
            },
        },
    },
    imgLogo: {
        height: '7vmin',
        width: '7vmin',
        minHeight: '35px',
        minWidth: '35px',
        marginRight: '10px',
        marginTop: '5px',
    },
}));

export default useStyles;