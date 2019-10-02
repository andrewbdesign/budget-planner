import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/routing/PrivateRoute';

// Redux
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';

// Components
import Landing from './Landing';
import Login from './auth/Login';
import Register from './auth/Register';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Alert from './layout/Alert';
import CreateProfile from './profile/CreateProfile';
import Dashboard from './dashboard/Dashboard';
import Expenses from './expenses/Expenses';
import Goals from './goals/Goals';

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
            <PrivateRoute exact path="/expenses" component={Expenses} />
            <PrivateRoute exact path="/goals" component={Goals} />
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
