import React from 'react';
import ProgressChart from './ProgressChart';
import { numberWithCommas } from 'utils/numberFormatter';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Progress = ({ goal: { goals, goalFocus } }) => {
  if (goals.length === 0) {
    return <div>No progress to show</div>;
  }

  const { totalSaved, goalTarget } = goals[goalFocus];
  const getPercentage = () => {
    return (parseInt(totalSaved) / parseInt(goalTarget)) * 100;
  };
  return (
    <div className="dashboard__chart">
      <div className="overview__heading">
        <h1>
          Your <span>Progress</span>
        </h1>
      </div>
      <div className="overview__body">
        <h2>You've saved ${numberWithCommas(totalSaved)}</h2>
        <p>You are {getPercentage().toFixed(0)}% the way there.</p>
        <ProgressChart />
      </div>
    </div>
  );
};

Progress.propTypes = {
  goal: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  goal: state.goal,
});

export default connect(mapStateToProps)(Progress);
