import React from 'react';

import * as S from './styled';
import Header from './header';
import Menu from './menu';

const Dashboard = () => {
  return (
    <S.Section>
      <S.Wrapper>
        <Menu />
        <Header />
      </S.Wrapper>
    </S.Section>
  );
};

export default Dashboard;
