import React from 'react';

import { Route, Switch } from 'react-router-dom';
// import PrivateRoute from 'components/routing/PrivateRoute';

import { ROUTES } from './routes';

// import { Register } from 'pages/register';
// import Login from 'components/auth/Login/Login';
// import CreateProfile from 'components/profile/CreateProfile';
// import EditProfile from 'components/profile/EditProfile';
// import Profile from 'components/profile/Profile/Profile';
// import Dashboard from 'components/dashboard/Dashboard';
// import Expenses from 'components/dashboard/Expenses/Expenses';
// import Goals from 'components/goals/Goals/Goals';
// import CreateGoal from 'components/goals/CreateGoal';
// import EditGoal from 'components/goals/EditGoal';
// import MonthlyBills from 'components/dashboard/MonthlyBills/MonthlyBills';

const Routes = () => {
  const publicRoutes = ROUTES.map(({ exact, path, component }) => {
    return <Route exact={exact} path={path} component={component} />;
  });

  return (
    <Switch>
      {publicRoutes}
      {/* <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <PrivateRoute exact path="/create-profile" component={CreateProfile} />
    <PrivateRoute exact path="/edit-profile" component={EditProfile} />
    <PrivateRoute exact path="/profile" component={Profile} />
    <PrivateRoute exact path="/monthly-bills" component={MonthlyBills} />
    <PrivateRoute exact path="/expenses" component={Expenses} />
    <PrivateRoute exact path="/goals" component={Goals} />
    <PrivateRoute exact path="/create-goal" component={CreateGoal} />
    <PrivateRoute path="/edit-goal/:id" component={EditGoal} /> */}
    </Switch>
  );
};

export default Routes;
