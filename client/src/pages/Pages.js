import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import Dashboard from './Dashboard';
import BankSettings from './BankSettings';
import Expenses from './Expenses';

const Pages = () => {
    const match = useRouteMatch();
    return (

        <Switch>
            <Route path={`${match.url}/dashboard`}>
                <Dashboard/>
            </Route>
            <Route path={`${match.url}/banksettings`}>
                <BankSettings/>
            </Route>
            <Route path={`${match.url}/expenses`}>
                <Expenses/>
            </Route>
        </Switch>
    )
}

export default Pages;