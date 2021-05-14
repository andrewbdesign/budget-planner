import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from 'actions/auth';
import setAuthToken from '../utils/setAuthToken';

// Routes
import Routes from 'components/routing/Routes';

// Components
import { Nav, Footer } from 'components';

import Landing from 'pages/landing';
import Alert from 'components/layout/alert';

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Nav />
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
