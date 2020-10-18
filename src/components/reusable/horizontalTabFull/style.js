import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appBar: {
        boxShadow: 'none',
        background: theme.palette.fixOne,
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
    },
    tab: {
        color: theme.palette.text.primary,
        "&:hover": {
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
        },
    },
    tabSelected: {
        color: theme.palette.text.primary,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
        "&:hover": {
            backgroundColor: 'rgba(0,0,0,0.2) !important',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
        },

    },
    fontTab: {
        fontSize: '13px ',
        fontStyle: 'italic',
        textTransform: 'capitalize',
    },
    fontTabSelected: {
        fontSize: '16px !important',
        fontWeight: 'bold',
    },
    containerTab: {
        backgroundColor: theme.palette.fixTwo,
        overflowX: 'auto',
        overflowY: 'auto',
        '&::-webkit-scrollbar-track':
        {
            backgroundColor: theme.palette.components.main,
        },
        '&::-webkit-scrollbar':
        {
            width: 6,
            height: 5,
        },
        '&::-webkit-scrollbar-thumb':
        {
            backgroundColor: theme.palette.secondary.main,
        },
    },
}));

export default useStyles;