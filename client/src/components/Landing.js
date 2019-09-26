import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section>
      <div className="container">
        <h1>This be the homepage</h1>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps)(Landing);
