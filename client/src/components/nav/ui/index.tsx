import React, { FC } from 'react';
import { Redirect, Link } from 'react-router-dom';

import {
  useLoginUser,
  useValidateUser,
  useAuthenticateUser,
} from '../controller';
import * as S from './styled';
import logo from 'assets/images/logo-bp.svg';

const Nav: FC = () => {
  const { onHandleChange, onLoginUser, formData, isLoading } = useLoginUser();

  const {
    onValidateEmail,
    onValidatePassword,
    isEmailError,
    isPasswordError,
  } = useValidateUser();

  const { isAuthenticated } = useAuthenticateUser();
  const { email, password } = formData;

  const isDisabled = password.length < 6 || email.length < 3;

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <S.Nav>
      <Link to="/">
        <S.Logo src={logo} alt="budget planner logo" />
      </Link>

      <S.Form onSubmit={onLoginUser}>
        <S.Label htmlFor="email">Email:</S.Label>
        <S.Input
          isError={isEmailError}
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={onHandleChange}
          onBlur={() => onValidateEmail(email)}
        />
        <S.Label htmlFor="password">Password:</S.Label>
        <S.Input
          isError={isPasswordError}
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={onHandleChange}
          onBlur={() => onValidatePassword(password)}
        />
        <S.Submit disabled={isDisabled}>
          {isLoading ? <S.Spinner className="lds-dual-ring" /> : 'Login'}
        </S.Submit>
        <S.StyledLink to="/register">Register</S.StyledLink>
      </S.Form>
    </S.Nav>
  );
};

export default Nav;
