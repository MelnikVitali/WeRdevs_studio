import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import theme from './theme';


import store from './store';
import App from './App';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <Router>
                <CssBaseline />
                <App />
            </Router>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);
