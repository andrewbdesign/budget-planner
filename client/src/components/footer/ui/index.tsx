import React, { FC } from 'react';

import * as S from './styled';
import { pages } from './pages';
import logo from 'assets/images/logo-bp.svg';

const Footer: FC = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.LogoGroup>
          <S.Logo src={logo} alt="BudgetPlanner logo" />
          <S.Description>
            <S.Disclaimer>Disclaimer:</S.Disclaimer> BudgetPlanner is a side
            project built by{' '}
            <S.StyledLink to="https://andrewbdesign.com">Andrew</S.StyledLink>{' '}
            to help calculate your ideal budget based off of monthly income and
            expenses. This is not to be taken seriously and any financial advice
            should be taken somewhere else.
          </S.Description>
        </S.LogoGroup>

        <div>
          <S.Heading>Information</S.Heading>
          <S.List>
            {pages.map(({ path, name }) => {
              return (
                <li>
                  <S.StyledLink to={path}>{name}</S.StyledLink>
                </li>
              );
            })}
          </S.List>
        </div>
      </S.Wrapper>
    </S.Footer>
  );
};

export default Footer;
