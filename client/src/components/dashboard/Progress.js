import React from 'react';
import ProgressChart from './ProgressChart';

const Progress = () => {
  return (
    <div className="dashboard__chart">
      <div className="overview__heading">
        <h1>
          Your <span>Progress</span>
        </h1>
      </div>
      <div className="overview__body">
        <h2>You've saved $9000</h2>
        <p>You are 70% there.</p>
        <ProgressChart />
      </div>
    </div>
  );
};

export default Progress;
