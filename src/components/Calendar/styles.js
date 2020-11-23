import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

const useStyles = makeStyles(theme => {
    return ({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            // padding: '209px 105px 209px 122px',
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText
        },
        calendar: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: 467,
            minHeight: 491,
            // height: '90%'
        },
        calendarHeader: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '92%',
            // margin: '0 7px',
            backgroundColor: theme.palette.secondary.main,
            // borderBottom: `1px solid ${ theme.palette.secondary.contrastText }`,
        },
        headerText: {
            fontSize: '18px',
            textTransform: 'uppercase',
            letterSpacing: '1.2px',
            wordSpacing: '8px',
            color: "#fff !important"
        },
        headerIcon: {
            color: theme.palette.secondary.contrastText,
            padding: 0,
        },
        gridList: {
            width: '100%',
            height: '100%',
            margin: '40px 0 !important',
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText
        },
        gridHeaderTile: {},
        gridTile: {
            // background: '#ede7f6',
            display: 'flex',
            position: 'relative',
            color: theme.palette.secondary.contrastText,
            textAlign: 'center',
            justifyContent: 'center !important',
            '&&:selected': {
                background: indigo[200]
            }
        },
        gridDays:{
            display: 'flex',
            justifyContent:'space-between'
        },
        selected: {
            // backgroundColor: 'red',
            color: '#fdd000 !important',
            '&::before': {
                position: 'absolute',
                top: '100%',
                bottom: 0,
                left: '50%',
                right: 0,
                transform: 'translate(-50%, -50%)',
                content: '""',
                display: 'block',
                width: '6px',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: '#fdd000'
            },
        },
        today: {
            background: '#FDD000',
            color: '#3D3D3D'
        },
        paper: {
            display: 'flex',
            padding: '7px',
            justifyContent: 'center',
            textAlign: 'center',
            color: theme.palette.secondary.contrastText,
            fontWeight: 500,
            '&:hover': {
                background: indigo[100]
            },

            cursor: 'pointer'
        },
        headerTile: {
            width: '100%',
            padding: '12px 0',
            overflow: 'hidden',
            color: theme.palette.primary.contrastText,
            fontSize: '20px',
            // borderBottom: `1px solid ${ theme.palette.secondary.contrastText }`,
            // borderTop: `1px solid ${ theme.palette.secondary.contrastText }`,
        },
        disabled: {
            // background: '#f9f9f9',
            color: theme.palette.disabledDate.main,
            fontWeight: 500,
            '&:hover': {
                background: indigo[100]
            },
        },
        line: {
            width: '90%',
            height: 1,
            backgroundColor: 'white'
        }
    });
});

export default useStyles;
