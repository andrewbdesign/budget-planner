import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from 'actions/auth';
import setAuthToken from '../utils/setAuthToken';

// Routes
import Routes from './routing/Routes';

// Components
import { Navbar2 } from 'ui/elements';

import ScrollToTop from 'containers/ScrollToTop/ScrollToTop';
import Landing from './landing/Landing';
import Navbar from './layout/Navbar/Navbar';
import Footer from './layout/Footer/Footer';
import Alert from './layout/Alert';

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Navbar2 />
          <div className="alert-container">
            <Alert />
          </div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
