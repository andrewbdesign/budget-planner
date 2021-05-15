import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';
import Header from './header';
import Menu from './menu';

import moment from 'moment';

import { RootState } from './types';

const Dashboard = () => {
  const profile = useSelector((state: RootState) => {
    return state.profile;
  });
  const { name } = profile.profile.user;

  const goal = useSelector((state: RootState) => state.goal);
  const { goals, goalFocus, loading } = goal;

  const todaysDate = moment().format('MMM Do, YYYY');

  if (!name) {
    return <div>no name</div>;
  }

  return (
    <S.Section>
      <S.Wrapper>
        <Menu goals={goals} loading={loading} goalFocus={goalFocus} />
        <Header
          name={name}
          todaysDate={todaysDate}
          goals={goals}
          loading={loading}
          goalFocus={goalFocus}
          profile={profile}
        />
      </S.Wrapper>
    </S.Section>
  );
};

export default Dashboard;
