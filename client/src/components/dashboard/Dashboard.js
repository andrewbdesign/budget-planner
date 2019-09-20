import React from 'react';
import Overview from './Overview';
import Progress from './Progress';
import Summary from './Summary';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="container">
        <Overview />
        <div className="dashboard__body">
          
          <Progress />
          <Summary />
          
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
