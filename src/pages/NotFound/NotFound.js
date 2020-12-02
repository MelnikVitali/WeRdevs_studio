import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from "react-helmet";

import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import useStyles from './styles';

const NotFound = () => {
    const classes = useStyles();

    return (
        <>
            <Helmet >
                <title >{'Page Not Found'}</title >
            </Helmet >

            <Container component='main' maxWidth='md' className={classes.root} >
                <Typography component='p' variant='h1' align='center' className={classes.error} >
                    404
                </Typography >
                <Typography component='h1' variant="h3" align='center' >
                    Страница не найдена
                </Typography >
                <Typography component='p' variant="body1" align='center' >
                    Вернуться на <Link to={'/'} >главную страницу</Link >
                </Typography >
            </Container >
        </>
    );
};

export default NotFound;
