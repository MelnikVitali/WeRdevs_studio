import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

const useStyles = makeStyles(theme => {
    return ({
        root: {
            overflow: 'unset',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            backgroundColor: theme.palette.secondary.main,
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: 0,
            color: theme.palette.subtitleTextGray.main
        },
        calendar: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: 467,
            margin: '3% 10%',
            color: theme.palette.subtitleTextGray
        },
        calendarHeader: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '93%',
            backgroundColor: theme.palette.secondary.main,
        },
        headerText: {
            fontSize: 15,
            textTransform: 'uppercase',
            letterSpacing: '1.2px',
            wordSpacing: '8px',
        },
        headerTile: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            fontSize: 15,
        },
        headerIcon: {
            color: theme.palette.secondary.contrastText,
            padding: 0,
        },
        gridList: {
            width: '100%',
            height: '100%',
            margin: '10px !important',
            backgroundColor: theme.palette.secondary.main,
        },
        gridTile: {
            display: 'flex',
            position: 'relative',
            textAlign: 'center',
            justifyContent: 'center !important',

        },
        gridDays: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        selected: {
            color: `${theme.palette.primary.main}`,
            '&::before': {
                position: 'absolute',
                top: '78%',
                left: 'calc(50% - 3px)',
                content: '""',
                display: 'block',
                width: '6px',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: theme.palette.primary.main,
            },
        },
        today: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            padding: 11
        },
        'today selected': {
            color: theme.palette.primary.contrastText,
        },
        paper: {
            display: 'flex',
            padding: 11,
            justifyContent: 'center',
            textAlign: 'center',
            fontWeight: 400,
            '&:hover': {
                background: indigo[100]
            },
            cursor: 'pointer',
        },
        disabled: {
            color: theme.palette.disabledDate.main,
            fontWeight: 500,
            '&:hover': {
                background: indigo[100]
            },
        },
        line: {
            width: '90%',
            backgroundColor: theme.palette.disabledDate.main,
            margin: '8px 0'
        },
        colorArrow: {
            color: theme.palette.subtitleTextGray.main
        }
    });
});

export default useStyles;
