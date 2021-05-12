import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

import {
  useLoginUser,
  useValidateUser,
  useAuthenticateUser,
} from '../controller';
import * as S from './styled';
import logo from '../assets/logo.svg';

// TODO
// - if auth, show other pages
// - if not auth, show login form
// - Make respsonsive
// - Move this component to AppRoot level
// - Fix onChange
// - Add spinner when validating

const Nav: FC = () => {
  const {
    onHandleChange,
    onHandleSubmit,
    formData,
    isLoading,
    isDisabled,
  } = useLoginUser();

  const {
    onValidateEmail,
    onValidatePassword,
    isEmailError,
    isPasswordError,
  } = useValidateUser();

  const { isAuthenticated } = useAuthenticateUser();
  const { email, password } = formData;

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <S.Nav>
      <S.Logo src={logo} alt="budget planner logo" />
      <S.Form onSubmit={onHandleSubmit}>
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
        <S.Submit disabled={isDisabled}>{isLoading ? '>.<' : 'Login'}</S.Submit>
        <S.StyledLink to="/register">Register</S.StyledLink>
      </S.Form>
    </S.Nav>
  );
};

export default Nav;
