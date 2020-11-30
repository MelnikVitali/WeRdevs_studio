import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 1336,
        minWidth: 320,
        margin: '0 auto',
        [theme.breakpoints.up("xs")]: {
            width: '90vw',
            paddingTop: 5,
        },
        [theme.breakpoints.up("sm")]: {
            width: '80vw',
            paddingTop: 10,
        },
        [theme.breakpoints.up("lg")]: {
            width: '74vw',
            paddingTop: 24,
            letterSpacing: 0.4,
        },
        [theme.breakpoints.up("xl")]: {
            width: '70vw',
            paddingTop: 34,
            letterSpacing: 0.4,
        },
    },
    title: {
        fontWeight: 'bold',
        color: theme.palette.primary.contrastText,
        letterSpacing: '-0.68px',
        [theme.breakpoints.down("xs")]: {
            fontSize: 20
        },
        [theme.breakpoints.up("sm")]: {
            paddingBottom: 15,
            fontSize: 24
        },
        [theme.breakpoints.up("md")]: {
            paddingBottom: 20,
            fontSize: 26
        },
        [theme.breakpoints.up("lg")]: {
            paddingBottom: 30,
            fontSize: 28
        },
        [theme.breakpoints.up("xl")]: {
            paddingBottom: 50,
            fontSize: 34
        },
    }
}));

export default useStyles;
