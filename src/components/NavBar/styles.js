import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appBar: {
        boxShadow: 'none',
        maxWidth: 1920,
        minWidth: 320,
        [theme.breakpoints.up("xs")]: {
            height: '12vh',
            minHeight: '12vh',
            padding: '0 25px 0 10px',
        },
        [theme.breakpoints.up("sm")]: {
            height: '15vh',
            minHeight: '15vh',
            padding: '0 55px 0 45px',
        },
        [theme.breakpoints.up("md")]: {
            height: '17vh',
            minHeight: '17vh',
            padding: '0 80px 0 70px',
        },
        [theme.breakpoints.up("lg")]: {
            height: '19vh',
            minHeight: '19vh',
            padding: '0 86px 0 76px',
        },
        [theme.breakpoints.up("xl")]: {
            height: '22vh',
            minHeight: '22vh',
            padding: '0 110px 0 100px',
        },
    },
    toolbar: {
        width: '100%',
        padding: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoLink: {
        flexGrow: 1,
    },
    logo: {
        [theme.breakpoints.up("xs")]: {
            height: 62
        },
        [theme.breakpoints.up("sm")]: {
            height: 62
        },
        [theme.breakpoints.up("md")]: {
            height: 63
        },
        [theme.breakpoints.up("lg")]: {
            height: 63
        },
        [theme.breakpoints.up("xl")]: {
            height: 78
        },
    },
    drawerList: {
        width: 250
    },
    navList: {
        display: 'flex',
        padding: '51px 0'
    },
    navLinks: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        whiteSpace: 'nowrap',
        padding: 0,
        marginLeft: 56,
        color: theme.palette.primary.contrastText,
        fontSize: '28px',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.56px',
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
            backgroundColor: theme.palette.primary.main,
        }
    },
}));

export default useStyles;
