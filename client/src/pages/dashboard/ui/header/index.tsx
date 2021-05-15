import React, { FC } from 'react';
import moment from 'moment';

import { numberWithCommas } from 'utils/numberFormatter';
import * as S from './styled';

import { useOverviewStats, useProfileStats } from '../../controller';

const Header: FC = () => {
  const { isLoadingProfile, profile } = useProfileStats();

  if (isLoadingProfile) {
    <div>Loading...</div>;
  }

  const todaysDate = moment().format('MMM Do, YYYY');
  const stats = useOverviewStats();

  return (
    <>
      <S.NavHeader>
        <S.Heading>
          Hello, <span>{profile.user.name}</span>! Today is {todaysDate}.
        </S.Heading>
        <S.Description>Welcome to your savings overview</S.Description>
      </S.NavHeader>
      <S.NavBody>
        <S.OverviewStats>
          {stats.length > 0 &&
            stats.map(({ title, value, id }) => {
              return (
                <S.Stat key={id} className="section">
                  <h2>{title}</h2>
                  <p>${numberWithCommas(value)}</p>
                </S.Stat>
              );
            })}
        </S.OverviewStats>
      </S.NavBody>
    </>
  );
};

export default Header;
