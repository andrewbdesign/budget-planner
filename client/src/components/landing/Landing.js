import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Components
import Header from './Header';
import Benefits from './Benefits';
import Features from './Features';
import Goals from './Goals';
import Expenses from './Expenses';
import SpendingLimit from './SpendingLimit';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <Header />
      <Benefits />
      <Features />
      <Goals />
      <Expenses />
      <SpendingLimit />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps)(Landing);
