import { getCurrentMonth, getTotalSum } from 'utils';
import {
  useDaysTilNextPay,
  useProfileStats,
  useGoalStats,
  useExpensesStats,
} from './';

type Stats = {
  title: string;
  value: number;
  id: string;
};

const useOverviewStats = () => {
  const { isLoadingProfile, profile } = useProfileStats();
  const { isLoadingGoals, goalFocus, goals } = useGoalStats();
  const { isLoadingExpenses, expenses } = useExpensesStats();
  const daysTilNextPay = useDaysTilNextPay();

  // if profile or goals still loading,
  // then return an empty array
  if (isLoadingProfile || isLoadingGoals || isLoadingExpenses) {
    return [];
  }

  const currentMonth = getCurrentMonth();
  const currentGoal = goals[goalFocus];
  const { goalTitle, goalTarget, totalSaved } = currentGoal;

  const overviewStats: Stats[] = [
    {
      title: `Target goal for: ${goalTitle}`,
      value: goalTarget,
      id: '1',
    },
    {
      title: 'Current savings for goal',
      value: totalSaved,
      id: '2',
    },
    {
      title: 'Money left to save',
      value: goalTarget - totalSaved,
      id: '3',
    },
    {
      title: 'Current balance',
      value: profile.currentBankBalance,
      id: '4',
    },
    {
      title: 'Daily limit',
      value: parseFloat(
        (profile.currentBankBalance / daysTilNextPay).toFixed(2),
      ),
      id: '5',
    },
    {
      title: `${currentMonth} Expenses`,
      value:
        expenses === null ? 0 : parseFloat(getTotalSum(expenses).toFixed(2)),
      id: '6',
    },
  ];

  return overviewStats;
};

export default useOverviewStats;
