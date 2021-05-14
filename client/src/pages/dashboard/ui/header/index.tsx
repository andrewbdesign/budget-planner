import React, { FC } from 'react';
import { renderOverviewStats } from './utils';
import * as S from './styled';

import { Stats } from './types';

type Props = {
  name: string;
  todaysDate: string;
  stats: Stats[];
};

const Header: FC<Props> = ({ name, todaysDate, stats }) => {
  return (
    <>
      <S.NavHeader>
        <S.Heading>
          Hello, <span>{name}</span>. It is {todaysDate}
        </S.Heading>
        <S.Description>Welcome to your savings overview</S.Description>
      </S.NavHeader>
      <S.NavBody>
        <div className="overview__section"></div>
        <S.OverviewStats>{renderOverviewStats(stats)}</S.OverviewStats>
      </S.NavBody>
    </>
  );
};

export default Header;
