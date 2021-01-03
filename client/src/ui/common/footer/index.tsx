import React, { FC } from 'react';

import logo from 'assets/images/logo-bp.svg';

import { messages } from './messages';

import { Wrapper } from 'ui/common';

import { footerLinks } from './routes';

import * as S from './styled';

const Footer: FC = () => {
  return (
    <S.Footer>
      <Wrapper>
        <S.Wrapper>
          <S.Logo src={logo} alt="BudgetPlanner logo" />
          <p>{messages.paragraph}</p>
        </S.Wrapper>
        <S.LinkWrapper>
          <S.Header>{messages.heading}</S.Header>
          {footerLinks.map(({ path, name }) => (
            <S.StyledLink key={path} to={path}>
              {name}
            </S.StyledLink>
          ))}
        </S.LinkWrapper>
        <S.LinkWrapper>
          <S.Header>{messages.heading}</S.Header>
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
