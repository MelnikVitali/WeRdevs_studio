import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

import { pxToRem } from "../../utils/pxToRem";

const useStyles = makeStyles(theme => {
    return ({
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'unset',
            boxSizing: 'border-box',
            backgroundColor: theme.palette.secondary.main,
            fontSize: pxToRem(14),
            fontWeight: 400,
            letterSpacing: 0,
            color: theme.palette.subtitleTextGray.main
        },
        calendar: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: pxToRem(467),
            margin: '3% 10%',
            color: theme.palette.subtitleTextGray
        },
        calendarHeader: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '0 4%',
            backgroundColor: theme.palette.secondary.main,
        },
        headerText: {
            fontSize: pxToRem(15),
            textTransform: 'uppercase',
            letterSpacing: pxToRem(1.2),
            wordSpacing: pxToRem(8),
        },
        headerTile: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            fontSize: pxToRem(15),
        },
        headerIcon: {
            color: theme.palette.secondary.contrastText,
            padding: 0,
        },
        gridList: {
            width: '100%',
            height: '100%',
            margin: `${pxToRem(10)} !important`,
            backgroundColor: theme.palette.secondary.main,
        },
        gridTile: {
            display: 'flex',
            position: 'relative',
            textAlign: 'center',
            justifyContent: 'center',
        },
        gridDays: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        selected: {
            color: `${theme.palette.primary.main}`,
            '&::after': {
                position: 'absolute',
                top: pxToRem(30),
                content: '""',
                display: 'block',
                width: pxToRem(6),
                height: pxToRem(6),
                borderRadius: pxToRem(3),
                backgroundColor: theme.palette.primary.main,
            },
        },
        today: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            padding: pxToRem(11)
        },
        'today selected': {
            color: theme.palette.primary.contrastText,
        },
        paper: {
            display: 'flex',
            padding: pxToRem(11),
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
            margin: `${pxToRem(8)} 0`,
        },
        colorArrow: {
            color: theme.palette.subtitleTextGray.main
        }
    });
});

export default useStyles;
