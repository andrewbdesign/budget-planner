import React, { FC } from 'react';
import { numberWithCommas } from 'utils/numberFormatter';
import { getTotalSum } from 'utils/bill';
import * as S from './styled';

import { Stats } from './types';
import { Goal, Profile } from '../types';

type Props = {
  name: string;
  todaysDate: string;
  loading: boolean;
  goalFocus: number;
  goals: Goal[];
  profile: Profile;
};

const Header: FC<Props> = ({
  name,
  todaysDate,
  goals,
  loading,
  goalFocus,
  profile,
}) => {
  if (loading) {
    <div>Loading...</div>;
  }

  if (profile.loading) {
    <div>Loading...</div>;
  }

  const { currentBankBalance } = profile.profile;
  // @TODO Load these properties properly
  const daysTilNextPay = 3;
  const getCurrentMonth = () => 'May';
  const expenses = [
    {
      name: 'asdf',
      amount: 30,
    },
    {
      name: 'asd2f',
      amount: 330,
    },
  ];

  const stats: Stats[] = [
    {
      title: `Target goal for: ${goals[goalFocus].goalTitle}`,
      value: goals[goalFocus].goalTarget,
      id: '1',
    },
    {
      title: 'Current savings for goal',
      value: goals[goalFocus].totalSaved,
      id: '2',
    },
    {
      title: 'Money left to save',
      value: goals[goalFocus].goalTarget - goals[goalFocus].totalSaved,
      id: '3',
    },
    {
      title: 'Current balance',
      value: currentBankBalance,
      id: '4',
    },
    {
      title: 'Daily limit',
      value: parseFloat((currentBankBalance / daysTilNextPay).toFixed(2)),
      id: '5',
    },
    {
      title: `${getCurrentMonth()} Expenses`,
      value: expenses ? parseFloat(getTotalSum(expenses).toFixed(2)) : 0,
      id: '6',
    },
  ];

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
