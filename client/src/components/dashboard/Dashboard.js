import React, { Fragment } from 'react';
import Overview from './Overview/Overview';
import Progress from './Overview/Progress';
import Summary from './Overview/Summary';
import MonthlyExpenses from './MonthlyExpenses/MonthlyExpenses';

const Dashboard = () => {
  return (
    <Fragment>
      <section className="dashboard">
        <div className="container">
          <Overview />
          <div className="dashboard__body">
            <Progress />
            <Summary />
          </div>
        </div>
      </section>
      <MonthlyExpenses />
    </Fragment>
  );
};

export default Dashboard;
