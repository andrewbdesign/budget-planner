import React, { FC } from 'react';

import { useLogoutCtrl } from './use-logout-ctrl';

const Logout: FC = () => {
  const [state, action] = useLogoutCtrl();
  console.log(state, action);
  return <div>You have logged out successfully!</div>;
};

export default Logout;
