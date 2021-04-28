import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import Dashboard from './Dashboard';
import BankSettings from './BankSettings';
import Expenses from './Expenses';
import EditExpense from '../components/EditExpense';
import Popup from '../components/Popup'

const Pages = () => {
    const match = useRouteMatch();
    return (

        <Switch>
            <Route path={`${match.url}/dashboard`}>
                <Dashboard/>
                <Popup />                    

            </Route>
            <Route path={`${match.url}/banksettings`}>
                <BankSettings/>
                <Popup />                    

            </Route>
            <Route exact path={`${match.url}/expenses`}>
                <Expenses/>
                <Popup />                    

            </Route>
            <Route path={`${match.url}/expenses/edit_expense/:id`}>
                <EditExpense/>
                <Popup />                    

            </Route>
        </Switch>
    )
}

export default Pages;