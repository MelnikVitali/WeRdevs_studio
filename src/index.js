import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import store from './store';

import Routes from './routes/Routes';

ReactDOM.render(
    <ThemeProvider theme={theme} >
        <Provider store={store} >
            <Router >
                <CssBaseline />
                <Routes />
            </Router >
        </Provider >
    </ThemeProvider >,
    document.getElementById('root')
);
