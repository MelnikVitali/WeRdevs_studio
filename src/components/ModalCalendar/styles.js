import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    modalTitle: {
        color: theme.palette.liteGray.main,
        fontSize: 16,
        letterSpacing: '-0.4px',
        fontWeight: 450
    },
    closeButton: {
        position: 'absolute',
        right: 0,
        top: 0,
        padding: 4,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.contrastText
        },
        borderRadius: 0,
    },
    closeIcon: {
        fontSize: 20
    },
    input: {
        fontSize: 16,
        fontWeight: "bold",
    },
    marginInput: {
        marginLeft: 20
    },
    formContainer:{
        display: 'flex',
        justifyContent: 'space-around',
        margin: '30px 20px 20px'
    },
    btn:{
        color: theme.palette.btnModalText.main,
        borderRadius: 5
    }

}));

export default useStyles;
