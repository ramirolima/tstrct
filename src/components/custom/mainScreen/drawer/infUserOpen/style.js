import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    gridContainer: {
        height: '220px',
        backgroundColor: theme.palette.jokerDetail.main,
    },
    background: {
        backgroundColor: theme.palette.combination.main,
        height: '180px',
    },
    imgLogo: {
        float: 'left',
        height: '25px',
        width: '25px',
        marginTop: '15px',
        marginLeft: '15px',
    },
    nameEmp: {
        float: 'left',
        margin: '5px',
        marginTop: '15px',
        color: theme.palette.primary.main,
    },

    btnCloseMenu: {
        marginTop: '5px',
        marginRight: '10px',
        color: theme.palette.secondary.main,
        '&:hover': {
            background: theme.palette.combination.hover,
        },
        background: theme.palette.fixOne,
    },
    dataInf: {
        marginTop: '20px',
        color: theme.palette.text.combination,
        fontSize: '18px',
        letterSpacing:0.5
    },
    dataInfProfile: {
        fontStyle: 'italic',
        fontSize: '12px',
        letterSpacing:0.5,
        color: theme.palette.text.combination,
    },
    containerData: {
        maxWidth: '34%'
    },
    containerImageProfile: {
        backgroundColor: theme.palette.jokerDetail.main,
        height: '90px',
        width: '90px',
        borderRadius: '200px',
        marginTop: '-25px',
        marginLeft: '-5px',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    imageProfile: {
        height: '80px',
        width: '80px',
        borderRadius: '200px',
        marginTop: '3px',
    },
}));

export default useStyles;