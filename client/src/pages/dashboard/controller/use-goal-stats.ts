import { useSelector } from 'react-redux';

import { RootState } from '../types';

const useGoalStats = () => {
  const { loading, goals, goalFocus } = useSelector(
    (state: RootState) => state.goal,
  );
  return { goals, goalFocus, isLoadingGoals: loading };
};

export default useGoalStats;
