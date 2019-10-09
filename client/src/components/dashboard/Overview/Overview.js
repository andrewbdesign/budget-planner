import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { numberWithCommas } from '../../../utils/numberFormatter';
import { getCurrentMonth } from '../../../utils/dates';
import { getTotalSum } from '../../../utils/bill';
import moment from 'moment';

const Overview = ({
  user,
  profile: { profile },
  bill: { bills },
  expense: { expenses },
}) => {
  const renderOverviewStats = () => {
    const stats = [
      {
        title: 'Target goal',
        value: `${profile.goalTarget}`,
      },
      {
        title: 'Current savings',
        value: `${profile.totalSaved}`,
      },
      {
        title: 'Difference',
        value: `${profile.goalTarget - profile.totalSaved}`,
      },
      {
        title: 'Current balance',
        value: '0',
      },
      {
        title: 'Daily limit',
        value: '0',
      },
      {
        title: `${getCurrentMonth()} Expenses`,
        value: `${expenses ? getTotalSum(expenses) : 0}`,
      },
    ];

    return stats.map(({ title, value }, index) => (
      <div key={index} className="section">
        <h2>{title}</h2>
        <p>${numberWithCommas(value)}</p>
      </div>
    ));
  };

  return (
    <div className="overview">
      <div className="overview__heading">
        <h1>
          Hello, {user && <span>{user.name}</span>}. It is{' '}
          {moment().format('MMM Do, YYYY')}
        </h1>
        <p>Welcome to your savings overview</p>
      </div>
      <div className="overview__body">
        <div className="overview__section"></div>
        <div className="overview__stats">{renderOverviewStats()}</div>
      </div>
    </div>
  );
};

Overview.propTypes = {
  profile: PropTypes.object.isRequired,
  bill: PropTypes.object.isRequired,
  expense: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  bill: state.bill,
  expense: state.expense,
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Overview);
