import React from 'react';

import { makeStyles, Grid, Typography } from '@material-ui/core';

import Calendar from '../../components/Calendar/Calendar';
import ModalCalendar from "../../components/ModalCalendar/ModalCalendar";

import bgImage from '../../assets/bgImage.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        // height: 'calc(100vh - 150px)',
        backgroundImage: `url(${ bgImage })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    content: {
        display: 'flex',
        minHeight: '491px',
        flexDirection: 'column',
        alignItems: 'center',
        // marginTop: '12%',
        marginBottom: '100px',
        color: '#fbfbfb',
        textAlign: 'right',
        paddingRight: '3%',
    },
    title: {
        color: theme.palette.primary.main,
        textTransform: 'uppercase',
    },
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <>
            <Grid
                component='section'
                container
                spacing={ 0 }
                className={ classes.root }
            >
                <Grid item className={ classes.content }>
                    <h1 className={ classes.title }>
                        choose the day
                        <br />
                        for the meeting
                    </h1>
                    <Typography>
                        We encourage you to book your
                        <br />appointment online.
                        <br />This will save you time.
                    </Typography>
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                    <Calendar />
                </Grid>
            </Grid>
            <ModalCalendar />
        </>
    );
};

export default HomePage;


