import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from 'actions/auth';
import { authLinks, guestLinks } from './routes';

import { Wrapper } from 'ui/common';

import * as S from './styled';
import logo from 'assets/images/logo-bp.svg';

type Props = {
  auth: {
    isAuthenticated: boolean;
    loading: boolean;
  };
  logout: () => void;
};

const Navbar: FC<Props> = ({ auth, logout }) => {
  const { isAuthenticated } = auth;
  const links = isAuthenticated ? authLinks : guestLinks;

  return (
    <S.Navbar>
      <Wrapper>
        <S.Logo>
          <Link to="/">
            <img src={logo} alt="budget-planner logo" />
          </Link>
        </S.Logo>
        <S.MenuList>
          {links.map(({ path, name }) => {
            return (
              <li key={path}>
                <S.StyledLink to={path}>{name}</S.StyledLink>
              </li>
            );
          })}
          {isAuthenticated ? (
            <li>
              <S.StyledLink to="/" onClick={logout}>
                Logout
              </S.StyledLink>
            </li>
          ) : null}
        </S.MenuList>
      </Wrapper>
    </S.Navbar>
  );
};

const mapStateToProps = (state: Props) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
