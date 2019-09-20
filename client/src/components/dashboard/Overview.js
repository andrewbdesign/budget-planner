import React from 'react';

const Overview = () => {
  const renderOverviewStats = () => {
    const stats = [
      {
        title: 'Target goal',
        value: '$20,000',
      },
      {
        title: 'Current savings',
        value: '$11,000',
      },
      {
        title: 'Difference',
        value: '$9,000',
      },
      {
        title: 'Current balance',
        value: '$2555.19',
      },
      {
        title: 'Daily limit',
        value: '$142.91',
      },
      {
        title: 'September Expenses',
        value: '$20',
      },
    ];

    return stats.map(({ title, value }, index) => (
      <div key={index} className="section">
        <h2>{title}</h2>
        <p>{value}</p>
      </div>
    ));
  };

  return (
    <div className="overview">
      <div className="overview__heading">
        <h1>
          Hello, <span>Andrew</span>.
        </h1>
        <p>Welcome to your savings overview</p>
      </div>
      <div className="overview__body">
        <div className="overview__section">
        </div>
        <div className="overview__stats">{renderOverviewStats()}</div>
      </div>
    </div>
  );
};

export default Overview;
