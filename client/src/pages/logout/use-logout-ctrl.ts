import { useEffect, useState } from 'react';

type LogoutCtrl = () => [{ loading: boolean }, () => void];

export const useLogoutCtrl: LogoutCtrl = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const onCallback = () => {};

  useEffect(() => {
    setLoading(true);
    if (true) {
      // Do something here
    }
    setLoading(false);
  }, []);
  return [{ loading }, onCallback];
};
