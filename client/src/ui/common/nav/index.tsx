import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { authLinks, guestLinks } from './routes';

import { Wrapper } from 'ui/common';

import * as S from './styled';
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
    <S.Navbar>
      <Wrapper>
        <S.Logo>
          <Link to="/">
            <img src={logo} alt="budget-planner logo" />
          </Link>
        </S.Logo>
        <S.MenuList>
          {links &&
            links.map(({ path, name }) => {
              return (
                <li key={path}>
                  <S.StyledLink to={path}>{name}</S.StyledLink>
                </li>
              );
            })}
          {isAuthenticated ? <button>Logout</button> : null}
        </S.MenuList>
      </Wrapper>
    </S.Navbar>
  );
};

const mapStateToProps = (state: Props) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navbar);
