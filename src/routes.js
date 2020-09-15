import React from 'react'

import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import Home from './Components/Pages/Home';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route render={() => <Redirect to="/"/>}/>
        </Switch>
    )
}
