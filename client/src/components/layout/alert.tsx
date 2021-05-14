import React from 'react';
import { useSelector } from 'react-redux';

type Flags = {
  id: string;
  alertType: string;
  msg: string;
};

type RootState = {
  alerts: Flags[];
};

const Alert = () => {
  const alerts = useSelector((state: RootState) => state.alerts);
  if (alerts !== undefined && alerts.length > 0) {
    return (
      <div>
        {alerts.map(({ id, alertType, msg }) => {
          return (
            <div key={id} className={`alert alert-${alertType}`}>
              {msg}
            </div>
          );
        })}
      </div>
    );
  }
  return <div />;
};

export default Alert;
