import React from 'react';
import { useSelector } from 'react-redux';

// @TODO add type to redux store and import from there
type RootState = {
  auth: {
    isAuthenticated: boolean;
    loading: boolean;
  };
};

const PrivateRoute = () => {
  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.auth,
  );

  return { isAuthenticated, loading };
};

export default PrivateRoute;
