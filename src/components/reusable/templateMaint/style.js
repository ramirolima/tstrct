import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'block'
    },
    divBanner: {
        width: '100%',
        height: '180px',
        background: theme.palette.gradient,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: '-1',
        boxShadow: '1px 5px 4px -1px rgba(0,0,0,0.2), 1px 5px 5px 0px rgba(0,0,0,0.14), 1px 5px 10px 0px rgba(0,0,0,0.12)',
    },
    divInf: {
        width: '100%',
        height: '40px',
        background: 'transparent',
        color: theme.palette.gradientTextA,
        top: '85px',
        marginBottom: '20px',
        marginLeft: '5px',
        position: 'fixed',
    },
    divInfItem: {
        display: 'inline-block',
        margin: 5,
        marginTop: 0,
    },
    divContent: {
        width: 'calc( 101.6vw - 45px - 65px )',

        transition: theme.transitions.create(['width', 'height', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: 600
        }),

        position: 'fixed',
        minHeight: '79vh',
        maxHeight: '79vh',
        marginTop: '44px',
        padding: '0px !important',

        [theme.breakpoints.down('xs')]: {
            marginTop: '52px',
        },
    },
    divContentMin: {
        width: 'calc( 101.6vw - 45px - 270px )',
    },

}));

export default useStyles;