import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

// Redux
import { connect } from 'react-redux';
import { getGoals } from '../../../actions/goal';

// Utils
import { numberWithCommas } from '../../../utils/numberFormatter';
import { getCurrentMonth } from '../../../utils/dates';
import { getTotalSum } from '../../../utils/bill';

// Images
import PlusIcon from '../../../assets/icons/plus.svg';

const Overview = ({
  user,
  profile: { profile },
  expense: { expenses },
  getGoals,
  goal: { goals, loading },
}) => {
  useEffect(() => {
    getGoals();
  }, [getGoals]);

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

  const renderGoalsMenu = () => {
    if (goals.length > 0 && !loading) {
      return goals.map((goal, index) => {
        const { goalTitle, _id } = goal;
        return (
          <div key={_id} className={`goal-item ${index === 0 && 'active'}`}>
            {goalTitle}
          </div>
        );
      });
    } else {
      return <div>You Have no goals</div>;
    }
  };

  return (
    <div className="overview">
      {!loading && goals.length > 0 && (
        <Fragment>
          <div className="goals__section">
            <div className="goals-menu">
              {renderGoalsMenu()}
              <Link to="/create-goal" className="goal-item">
                Add new goal <img src={PlusIcon} alt="plus icon" />{' '}
              </Link>
            </div>
          </div>
        </Fragment>
      )}

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
  expense: PropTypes.object.isRequired,
  getGoals: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  expense: state.expense,
  goal: state.goal,
});
const mapDispatchToProps = { getGoals };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Overview);
