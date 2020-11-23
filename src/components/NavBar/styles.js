import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appBar: {
        boxShadow: 'none',
        flexGrow: 1,

    },
    toolbar: {
        height: 80,
        width: '100%',
        padding: '0 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:8,
        [theme.breakpoints.up("sm")]: {
            height: 110,
            padding: '0 75px',
            marginBottom: 16,
        },
        [theme.breakpoints.up("md")]: {
            height: 150,
            padding: '0 110px',
            marginBottom: 22
        },

    },
    logoLink: {
        flexGrow: 1,
    },
    logo: {
        width: 126,
        [theme.breakpoints.up("md")]: {
            width: '165px',
        },
    },
    drawerList: {
        width: 250
    },
    navList: {
        display: 'flex',
    },
    navLinks: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        whiteSpace: 'nowrap',
        padding: 0,
        marginLeft: '70px',
        color: theme.palette.primary.contrastText,
        fontSize: '28px',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.56px',
        '&:hover': {
            backgroundColor: 'transparent !important',
            color: theme.palette.primary.main
        },
        "&:first-child": {
            marginLeft: '20px',
        },
    },
    active: {
        '&::before': {
            position: 'absolute',
            top: '115%',
            left: '50%',
            right: 0,
            transform: 'translate(-50%, -50%)',
            content: '""',
            display: 'block',
            width: '14px',
            height: '14px',
            borderRadius: '7px',
            backgroundColor: '#fdd000'
        }
    },
    menuButton: {
        fontSize: 26
    }
}));

export default useStyles;
