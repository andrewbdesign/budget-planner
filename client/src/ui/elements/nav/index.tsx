import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { authLinks, guestLinks } from './routes';

import logo from 'assets/images/logo-bp.svg';

type Props = {
  auth: {
    isAuthenticated: boolean;
    loading: boolean;
  };
};

const Navbar: FC<Props> = ({ auth }) => {
  const { isAuthenticated } = auth;
  const links = isAuthenticated ? authLinks : guestLinks;
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="budget-planner logo" />
          </Link>
        </div>
        <ul className="menu-list">
          {links &&
            links.map(({ path, name }) => {
              return (
                <li key={path}>
                  <Link to={path}>{name}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
};

// TODO: Fix any state
const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navbar);
