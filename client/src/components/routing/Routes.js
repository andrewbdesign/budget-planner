import React from 'react';

import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'components/routing/PrivateRoute';

import { Register } from 'pages/register';
// import { Dashboard } from 'pages/dashboard';
import Dashboard from 'components/dashboard/Dashboard';

import CreateProfile from '../profile/CreateProfile';
import EditProfile from '../profile/EditProfile';
import Profile from 'components/profile/Profile/Profile';
import Expenses from '../dashboard/Expenses/Expenses';
import Goals from 'components/goals/Goals/Goals';
import CreateGoal from '../goals/CreateGoal';
import EditGoal from '../goals/EditGoal';
import MonthlyBills from '../dashboard/MonthlyBills/MonthlyBills';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/monthly-bills" component={MonthlyBills} />
        <PrivateRoute exact path="/expenses" component={Expenses} />
        <PrivateRoute exact path="/goals" component={Goals} />
        <PrivateRoute exact path="/create-goal" component={CreateGoal} />
        <PrivateRoute path="/edit-goal/:id" component={EditGoal} />
      </Switch>
    </>
  );
};

export default Routes;
