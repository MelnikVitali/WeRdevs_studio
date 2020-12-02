import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from "../../utils/pxToRem";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        marginBottom: theme.spacing(2)
    },
    error: {
        marginTop: theme.spacing(8),
        fontSize: pxToRem(50),
        fontWeight: 'bold',
        color: theme.palette.primary.alert
    }
}));

export default useStyles;
