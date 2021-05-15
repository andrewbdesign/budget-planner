import React, { FC } from 'react';
import { numberWithCommas } from 'utils/numberFormatter';
import * as S from './styled';

import { Profile } from '../../types';
import { useOverviewStats } from '../../controller';

type Props = {
  name: string;
  todaysDate: string;
  loading: boolean;
  profile: Profile;
};

const Header: FC<Props> = ({ name, todaysDate, loading, profile }) => {
  if (loading) {
    <div>Loading...</div>;
  }

  if (profile.loading) {
    <div>Loading...</div>;
  }

  const stats = useOverviewStats();

  return (
    <>
      <S.NavHeader>
        <S.Heading>
          Hello, <span>{name}</span>! Today is {todaysDate}.
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
