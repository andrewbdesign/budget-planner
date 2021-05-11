import React from 'react';
import { useLoginUser } from '../controller';
import * as S from './styled';
import logo from '../assets/logo.svg';

const Nav = () => {
  const {
    formData,
    onHandleChange,
    onHandleSubmit,
    onHandleError,
    isLoading,
    isDisabled,
  } = useLoginUser();

  const { email, password } = formData;
  return (
    <S.Nav>
      <S.Logo src={logo} alt="budget planner logo" />
      <S.Form onSubmit={onHandleSubmit}>
        <S.Label htmlFor="email">Email:</S.Label>
        <S.Input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={onHandleChange}
          onBlur={onHandleError}
        />
        <S.Label htmlFor="password">Password:</S.Label>
        <S.Input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={onHandleChange}
          onBlur={onHandleError}
        />
        <S.Submit disabled={isDisabled}>
          {isLoading ? 'logging in...' : 'Login'}
        </S.Submit>
        <S.StyledLink to="/register">Register</S.StyledLink>
      </S.Form>
    </S.Nav>
  );
};

export default Nav;
