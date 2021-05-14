import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

// Redux
import { connect } from 'react-redux';
import { getGoals, setGoalFocus } from 'actions/goal';

// Utils
import { numberWithCommas } from 'utils/numberFormatter';
import { getCurrentMonth } from 'utils/dates';
import { getTotalSum } from 'utils/bill';

// Images
import PlusIcon from 'assets/icons/plus.svg';

import './Overview.scss';

const Overview = ({
  user,
  profile: { profile },
  expense: { expenses },
  getGoals,
  goal: { goals, loading, goalFocus },
  setGoalFocus,
}) => {
  // on Mount get goals
  useEffect(() => {
    getGoals();
  }, [getGoals]);

  // Handle dates
  const today = moment().date();
  let payDayNumber = moment(profile.payDay).date();
  let currentMonth = moment().month();
  let currentYear = moment().year();

  const now = moment([currentYear, currentMonth, today]);
  const payDate = moment([currentYear, currentMonth, payDayNumber]);

  let daysTilNextPay;
  if (now.isBefore(payDate)) {
    const now = moment([currentYear, currentMonth, today]);
    const payDate = moment([currentYear, currentMonth, payDayNumber]);
    daysTilNextPay = payDate.diff(now, 'days');
  } else if (now.isAfter(payDate)) {
    const newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    const newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const now = moment([currentYear, currentMonth, today]);
    const payDate = moment([newYear, newMonth, payDayNumber]);

    daysTilNextPay = payDate.diff(now, 'days');
  } else {
    daysTilNextPay = 1;
  }

  const renderOverviewStats = () => {
    const stats = [
      {
        title: `Target goal for: ${goals[goalFocus].goalTitle}`,
        value: `${goals[goalFocus].goalTarget}`,
      },
      {
        title: 'Current savings for goal',
        value: `${goals[goalFocus].totalSaved}`,
      },
      {
        title: 'Money left to save',
        value: `${goals[goalFocus].goalTarget - goals[goalFocus].totalSaved}`,
      },
      {
        title: 'Current balance',
        value: `${profile.currentBankBalance}`,
      },
      {
        title: 'Daily limit',
        value: `${(profile.currentBankBalance / daysTilNextPay).toFixed(2)}`,
      },
      {
        title: `${getCurrentMonth()} Expenses`,
        value: `${expenses ? getTotalSum(expenses).toFixed(2) : 0}`,
      },
    ];

    return stats.map(({ title, value }, index) => (
      <div key={index} className="section">
        <h2>{title}</h2>
        <p>${numberWithCommas(value)}</p>
      </div>
    ));
  };

  if (goals.length === 0) {
    return <div>Nothing to show...</div>;
  }

  return (
    <div className="overview">
      {/* Goal selector menu */}
      <div className="goals__section">
        <div className="goals-menu">
          {goals.map((goal, index) => {
            const { goalTitle, _id } = goal;
            return (
              <div
                key={_id}
                className={`goal-item ${index === goalFocus && 'active'}`}
                onClick={() => setGoalFocus(index)}
              >
                {goalTitle}
              </div>
            );
          })}
          <Link to="/create-goal" className="goal-item">
            Add new goal <img src={PlusIcon} alt="plus icon" />{' '}
          </Link>
        </div>
      </div>

      {/* Heading */}
      <div className="overview__heading">
        <h1>
          Hello, {user && <span>{user.name}</span>}. It is{' '}
          {moment().format('MMM Do, YYYY')}
        </h1>
        <p>Welcome to your savings overview</p>
      </div>
      {/* Body */}
      <div className="overview__body">
        <div className="overview__section"></div>
        <div className="overview__stats">{renderOverviewStats()}</div>
      </div>
    </div>
  );
};

Overview.propTypes = {
  profile: PropTypes.object.isRequired,
  expense: PropTypes.object.isRequired,
  getGoals: PropTypes.func.isRequired,
  setGoalFocus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  expense: state.expense,
  goal: state.goal,
});
const mapDispatchToProps = { getGoals, setGoalFocus };

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
