import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from 'actions/auth';
import { clearBills } from 'actions/bill';
import { clearProfile } from 'actions/profile';
import { clearExpenses } from 'actions/expense';
import { clearDreams } from 'actions/dream';
import { clearGoals } from 'actions/goal';

import './Navbar.scss';

import logo from 'assets/images/logo-bp.svg';

const Navbar = ({
  logout,
  clearBills,
  clearProfile,
  clearExpenses,
  clearDreams,
  clearGoals,
  auth,
}) => {
  const { isAuthenticated, loading } = auth;

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/goals">Goals</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <a
          href="#!"
          onClick={() => {
            logout();
            clearBills();
            clearProfile();
            clearExpenses();
            clearDreams();
            clearGoals();
          }}
        >
          Logout
        </a>
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
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="budget-planner logo" />
          </Link>
        </div>
        <ul className="menu-list">
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  clearBills: PropTypes.func.isRequired,
  clearProfile: PropTypes.func.isRequired,
  clearExpenses: PropTypes.func.isRequired,
  clearDreams: PropTypes.func.isRequired,
  clearGoals: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  logout,
  clearBills,
  clearProfile,
  clearExpenses,
  clearDreams,
  clearGoals,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
