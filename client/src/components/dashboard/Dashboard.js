import React, { Fragment, useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profile';

// Components
import Overview from './Overview/Overview';
import Progress from './Overview/Progress';
import Summary from './Overview/Summary';
import MonthlyExpenses from './MonthlyExpenses/MonthlyExpenses';

const Dashboard = ({ auth: { user }, profile: { profile, loading } }) => {
  useEffect(() => {
    console.log('getCurrentProfile');
    getCurrentProfile();
    // eslint-disable-next-line
  }, [getCurrentProfile]);

  // if (isAuthenticated) {
  console.log({ user, loading, profile });
  return loading && profile === null ? (
    <h1>SPINNER</h1>
  ) : (
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
  // } else {
  //   return <div></div>;
  // }
};

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = {
  getCurrentProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
