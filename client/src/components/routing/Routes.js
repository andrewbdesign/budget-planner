import React, { Fragment } from 'react';

import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/routing/PrivateRoute';

import Register from '../auth/Register';
import Login from '../auth/Login';
import CreateProfile from '../profile/CreateProfile';
import Profile from '../profile/Profile';
import Dashboard from '../dashboard/Dashboard';
import Expenses from '../dashboard/Expenses/Expenses';
import Goals from '../goals/Goals';
import CreateGoal from '../goals/CreateGoal';
import EditGoal from '../goals/EditGoal';
import MonthlyBills from '../dashboard/MonthlyBills/MonthlyBills';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/monthly-bills" component={MonthlyBills} />
        <PrivateRoute exact path="/expenses" component={Expenses} />
        <PrivateRoute exact path="/goals" component={Goals} />
        <PrivateRoute exact path="/create-goal" component={CreateGoal} />
        <PrivateRoute path="/edit-goal/:id" component={EditGoal} />
      </Switch>
    </Fragment>
  );
};

//
export default Routes;
