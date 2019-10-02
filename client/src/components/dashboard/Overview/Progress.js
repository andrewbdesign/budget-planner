import React from 'react';
import ProgressChart from './ProgressChart';
import { numberWithCommas } from '../../../utils/numberFormatter';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Progress = ({ profile: { profile } }) => {
  const getPercentage = () => {
    const { totalSaved, goalTarget } = profile;
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
        <h2>You've saved ${numberWithCommas(profile.totalSaved)}</h2>
        <p>You are {getPercentage()}% there.</p>
        <ProgressChart />
      </div>
    </div>
  );
};

Progress.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(Progress);
