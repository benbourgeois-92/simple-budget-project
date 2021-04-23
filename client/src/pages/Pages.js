import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import Dashboard from './Dashboard';
import BankSettings from './BankSettings';
import Expenses from './Expenses';
import EditExpense from '../components/EditExpense';

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
            <Route exact path={`${match.url}/expenses`}>
                <Expenses/>
            </Route>
            <Route path={`${match.url}/expenses/edit_expense/:id`}>
                <EditExpense/>
            </Route>
        </Switch>
    )
}

export default Pages;