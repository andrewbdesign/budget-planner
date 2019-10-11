import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/routing/PrivateRoute';

// Redux
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';

// Components
import Landing from './landing/Landing';
import Login from './auth/Login';
import Register from './auth/Register';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Alert from './layout/Alert';
import CreateProfile from './profile/CreateProfile';
import Dashboard from './dashboard/Dashboard';
import Expenses from './dashboard/Expenses/Expenses';
import Goals from './goals/Goals';
import CreateGoal from './goals/CreateGoal';
import EditGoal from './goals/EditGoal';
import MonthlyBills from './dashboard/MonthlyBills/MonthlyBills';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute
              exact
              path="/monthly-bills"
              component={MonthlyBills}
            />
            <PrivateRoute exact path="/expenses" component={Expenses} />
            <PrivateRoute exact path="/goals" component={Goals} />
            <PrivateRoute exact path="/create-goal" component={CreateGoal} />
            <PrivateRoute path="/edit-goal/:id" component={EditGoal} />
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
