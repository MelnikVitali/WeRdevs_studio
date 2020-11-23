import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const variables = {
    textColorLiteGray: '#DFDFDF',
    textColorDarkGray: '#3C3C3C',
    textColorWhite: '#fff'
};


// Generate breakpoints so we can use them in the theme definition
const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FDD000',
            contrastText: variables.textColorDarkGray
        },
        secondary: {
            main: '#272829',
            contrastText: variables.textColorWhite
        },
        disabledDate: {
            main: '#535354',
        }
    },
    typography: {
        fontFamily: 'Rubik, sans-serif',
        body2: {
            fontSize: 20,
            fontWeight: 300,
            letterSpacing: '0.4px',
        },
        h1: {
            // margin: '98px  0 78px',
            // fontSize: 34,
            // fontWeight: 'bold',
            // letterSpacing: '-0.68px',
        },
    },
    // shape: {
    //     borderRadius: 'none',
    // },
    overrides: {
        'html, body': {
            height: '100%',
        },
        body: {
            display: 'flex'
        },

        'body #root': {
            display: 'flex',
            width: '100%'
        },
        MuiTypography:{
            button: {
                [breakpoints.up("sm")]: {
                    fontSize: 24
                },
                [breakpoints.up("md")]: {
                    fontSize: 28
                }
            },
        },

        MuiTableCell: {
            head: {
                color: '#fff'
            }
        },
        MuiGridListTile: {
            tile: {
                display: 'flex',
                alignItems: 'center'
            }
        },
    },
});

export default theme;
