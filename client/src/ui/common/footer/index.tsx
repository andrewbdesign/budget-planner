import React, { FC } from 'react';

import logo from 'assets/images/logo-bp.svg';

import { Wrapper } from 'ui/common';

import { footerLinks } from './routes';

import * as S from './styled';

const Footer: FC = () => {
  return (
    <S.Footer>
      <Wrapper>
        <S.Wrapper>
          <S.Logo src={logo} alt="BudgetPlanner logo" />
          <p>
            BudgetPlanner is an online tool to help you calculate your budget
            from a month-to-month basis. {new Date().getFullYear()}
          </p>
        </S.Wrapper>
        <S.LinkWrapper>
          <S.Header>Important Links</S.Header>
          {footerLinks.map(({ path, name }) => (
            <S.StyledLink key={path} to={path}>
              {name}
            </S.StyledLink>
          ))}
        </S.LinkWrapper>
        <S.LinkWrapper>
          <S.Header>Important Links</S.Header>
          {footerLinks.map(({ path, name }) => (
            <S.StyledLink key={path} to={path}>
              {name}
            </S.StyledLink>
          ))}
        </S.LinkWrapper>
      </Wrapper>
    </S.Footer>
  );
};

export default Footer;
