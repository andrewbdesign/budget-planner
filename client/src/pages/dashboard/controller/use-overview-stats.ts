import { useSelector } from 'react-redux';
import { RootState } from '../types';
import { getCurrentMonth, getTotalSum, Bill } from 'utils';
import { useDaysTilNextPay } from './';

type Stats = {
  title: string;
  value: number;
  id: string;
};

const useOverviewStats = () => {
  const { goal, profile } = useSelector((state: RootState) => state);
  const { goals, goalFocus } = goal;
  const { currentBankBalance } = profile.profile;
  const { daysTilNextPay } = useDaysTilNextPay();

  // @TODO Load bills properly
  const expenses: Bill[] = [
    {
      name: 'asdf',
      amount: 30,
    },
    {
      name: 'asd2f',
      amount: 330,
    },
  ];

  // if goals are still loading, return empty string;
  if (goal.loading) {
    return [];
  }

  const currentGoal = goals[goalFocus];
  const currentMonth = getCurrentMonth();

  const overviewStats: Stats[] = [
    {
      title: `Target goal for: ${currentGoal.goalTitle}`,
      value: currentGoal.goalTarget,
      id: '1',
    },
    {
      title: 'Current savings for goal',
      value: currentGoal.totalSaved,
      id: '2',
    },
    {
      title: 'Money left to save',
      value: currentGoal.goalTarget - currentGoal.totalSaved,
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
      title: `${currentMonth} Expenses`,
      value: expenses ? parseFloat(getTotalSum(expenses).toFixed(2)) : 0,
      id: '6',
    },
  ];

  return overviewStats;
};

export default useOverviewStats;
