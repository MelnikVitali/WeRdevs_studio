import { makeStyles } from "@material-ui/core";

import bgImage from "../../assets/bgImage.jpg";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        maxWidth: 1920,
        minWidth: 320,
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '100px',
        textAlign: 'right',
        paddingRight: '3%',
        [theme.breakpoints.up("xs")]: {
            marginTop: 0
        },
        [theme.breakpoints.up("md")]: {
            marginTop: 92
        },
        [theme.breakpoints.up("lg")]: {
            marginTop: 84
        },
        [theme.breakpoints.up("xl")]: {
            marginTop: 160
        },
    },
    title: {
        color: theme.palette.primary.main,
        textTransform: 'uppercase',
        fontSize: 40,
        letterSpacing: '2.2px',
        [theme.breakpoints.only("xs")]: {
            letterSpacing: '1px',
            fontSize: 32,
        },
    },
    subtitle: {
        width: '100%',
        fontSize: 22,
        fontWeight: 300,
        letterSpacing: '0.6px',
        color: theme.palette.subtitleTextGray.main,
        [theme.breakpoints.only("xs")]: {
            letterSpacing: 0.3,
            fontSize: 16,
        },
    },
    calendarContainer: {
        width: '40%'
    }
}));

export default useStyles;
