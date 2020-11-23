import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: '74px 292px 130px',
        [theme.breakpoints.down("md")]: {
            padding: '54px 150px 110px',
        },

    },
    title: {
        // marginTop: 74,
        // margin: '98px  0 78px',
        fontSize: 34,
        fontWeight: 'bold',
        letterSpacing: '-0.68px',
    },
    marginTypography: {
        marginBottom: 3.5
    }
}));

export default useStyles;
