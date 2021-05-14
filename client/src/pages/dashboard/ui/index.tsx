import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';
import Header from './header';
import moment from 'moment';
// import { getTotalSum } from 'utils/bill';

import { Stats } from './header/types';

// @TODO: Import type from store
type RootState = {
  profile: {
    loading: boolean;
    profile: {
      user: {
        name: string;
      };
      currentBankBalance: number;
    };
  };
  goal: {
    loading: boolean;
    goals: any[];
    goalFocus: number;
  };
};

const Dashboard = () => {
  const profile = useSelector((state: RootState) => {
    console.log(state);
    return state.profile.profile;
  });
  const { name } = profile.user;

  // const goal = useSelector((state: RootState) => state.goal);
  // const { goals, goalFocus } = goal;

  // @TODO
  // const daysTilNextPay = 10;
  // const getCurrentMonth = () => 'May';
  // const expenses = [{ amount: 20 }, { amount: 120 }];

  const todaysDate = moment().format('MMM Do, YYYY');

  const stats: Stats[] = [
    {
      title: `Target goal for`,
      value: 3,
      id: '1',
    },
    // {
    //   title: `Target goal for: ${goals[goalFocus].goalTitle}`,
    //   value: goals[goalFocus].goalTarget,
    //   id: '1',
    // },
    // {
    //   title: 'Current savings for goal',
    //   value: goals[goalFocus].totalSaved,
    //   id: '2',
    // },
    // {
    //   title: 'Money left to save',
    //   value: goals[goalFocus].goalTarget - goals[goalFocus].totalSaved,
    //   id: '3',
    // },
    // {
    //   title: 'Current balance',
    //   value: profile.currentBankBalance,
    //   id: '4',
    // },
    // {
    //   title: 'Daily limit',
    //   value: (profile.currentBankBalance / daysTilNextPay).toFixed(2),
    //   id: '5',
    // },
    // {
    //   title: `${getCurrentMonth()} Expenses`,
    //   value: `${expenses ? getTotalSum(expenses).toFixed(2) : 0}`,
    //   id: '6',
    // },
  ];

  if (!name) {
    return <div>no name</div>;
  }

  return (
    <S.Section>
      <Header name={name} todaysDate={todaysDate} stats={stats} />
    </S.Section>
  );
};

export default Dashboard;
