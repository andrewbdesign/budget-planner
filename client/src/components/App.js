import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from '../utlis/setAuthToken';

// Components
import Login from './auth/Login';
import Register from './auth/Register';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Alert from './layout/Alert';
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
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/expenses" component={Expenses} />
          <Route exact path="/goals" component={Goals} />
          <Footer />
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
