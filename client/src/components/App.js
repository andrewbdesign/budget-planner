import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from 'actions/auth';
import setAuthToken from '../utils/setAuthToken';

// Routes
import Routes from './routing/Routes';

// Components
import { Footer } from 'ui/common';

import ScrollToTop from 'containers/ScrollToTop/ScrollToTop';
import Landing from 'pages/landing';
import Alert from './layout/Alert';
import { Nav } from 'components/nav';

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <ScrollToTop />
        <div className="alert-container">
          <Alert />
        </div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
