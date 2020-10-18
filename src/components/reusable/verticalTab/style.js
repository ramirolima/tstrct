import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.components.main,
        display: 'flex',
        minHeight: '80vh',
        maxHeight: '80vh',
        borderRadius: 15,
        color: theme.palette.text.components,
        borderColor: theme.palette.primary.main,

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        minWidth: 150,
        maxWidth: 150,
        maxHeight: '80vh',
    },
    itemTab: {
        '&:hover': {
            backgroundColor: theme.palette.background,
            color: theme.palette.text.mainColor,
            height: 10
        },
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: 5,
        marginTop: 0,
        marginBottom: 0,
        textTransform: 'capitalize',
    },
    selected: {
        backgroundColor: theme.palette.background,
        color: theme.palette.text.mainColor,
    },
    item: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
        minWidth: 0
    },
    scroll: {
        overflowX: 'hidden',
        '&::-webkit-scrollbar-track':
        {
            backgroundColor: theme.palette.components.main,
            marginTop: 20,
            marginBottom: 20,
        },
        '&::-webkit-scrollbar':
        {
            width: 2,
        },
        '&::-webkit-scrollbar-thumb':
        {
            backgroundColor: theme.palette.secondary.main,
        },
    }
}));

export default useStyles;