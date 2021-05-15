import { useSelector } from 'react-redux';
import { RootState } from '../types';

const useExpensesStats = () => {
  const { expenses, monthFocus } = useSelector(
    (state: RootState) => state.expense,
  );

  // @TODO: Fix setting loading to not be explicitly false
  return { isLoadingExpenses: false, expenses, monthFocus };
};

export default useExpensesStats;
