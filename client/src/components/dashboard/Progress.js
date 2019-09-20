import React from 'react';

const Progress = () => {
  return (
    <div className="dashboard__chart">
      <div className="overview__heading">
        <h1>
          Your <span>Progress</span>
        </h1>
      </div>
      <div className="overview__body">
        <h2>Your progress</h2>
        <p>You are 70% there.</p>
      </div>
    </div>
  );
};

export default Progress;
