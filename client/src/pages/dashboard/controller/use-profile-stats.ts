import { useSelector } from 'react-redux';

import { RootState } from '../types';

const useProfileStats = () => {
  const { loading, profile } = useSelector((state: RootState) => state.profile);
  return { profile, isLoadingProfile: loading };
};

export default useProfileStats;
