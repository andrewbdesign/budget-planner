import React from 'react';
import { useLoginUser, useValidateUser } from '../controller';
import * as S from './styled';
import logo from '../assets/logo.svg';

const Nav = () => {
  const {
    formData,
    onHandleChange,
    onHandleSubmit,
    isLoading,
    isDisabled,
  } = useLoginUser();

  const {
    isEmailError,
    isPasswordError,
    onValidateEmail,
    onValidatePassword,
  } = useValidateUser();

  const { email, password } = formData;

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
