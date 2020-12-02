import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import AboutUs from '../pages/AboutUs/AboutUs';
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

const Routes = () => {
    return (
        <>
            <NavBar />
            <Switch >
                <Route exact path='/' component={HomePage} />
                <Route path='/about-us' component={AboutUs} />
                <Route component={NotFound} />
            </Switch >
        </>
    );
}

export default Routes;
