import React from 'react';
import { useLoginUser } from '../controller';
import * as S from './styled';

const Nav = () => {
  const { formData, onHandleChange, onHandleSubmit } = useLoginUser();

  const { email, password } = formData;
  return (
    <S.Nav>
      <h1>Budget Planner</h1>
      <S.Form onSubmit={onHandleSubmit}>
        <S.Label htmlFor="email">Email:</S.Label>
        <S.Input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={onHandleChange}
        />
        <S.Label htmlFor="password">Password:</S.Label>
        <S.Input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={onHandleChange}
        />
        <S.Submit>Login</S.Submit>
        <a href="http://google.com">Register</a>
      </S.Form>
    </S.Nav>
  );
};

export default Nav;
