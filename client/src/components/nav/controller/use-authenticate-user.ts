import { useSelector } from 'react-redux';

// Import type from store
type RootState = {
  auth: {
    isAuthenticated: boolean;
  };
};

const useAuthenticateUser = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  return { isAuthenticated };
};

export default useAuthenticateUser;
