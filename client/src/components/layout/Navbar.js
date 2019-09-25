import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '../../assets/images/logo-bp.svg';
const Navbar = ({ isAuthenticated }) => {
  const authLinks = (
    <Fragment>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/expenses">Expenses</Link>
      </li>
      <li>
        <Link to="/goals">Goals</Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <Link to="/">
            <img src={logo} alt="budget-planner logo" />
          </Link>
        </div>
        <ul className="navbar__menu-list">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
