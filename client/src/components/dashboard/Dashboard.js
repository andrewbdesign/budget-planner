import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profile';

// Components
import Overview from './Overview/Overview';
import Progress from './Overview/Progress';
import Summary from './Overview/Summary';
import MonthlyExpenses from './MonthlyExpenses/MonthlyExpenses';
import Expenses from './Expenses/Expenses';

const Dashboard = ({
  auth: { user },
  profile: { profile, loading },
  getCurrentProfile,
}) => {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <h1>SPINNER</h1>
  ) : (
    <Fragment>
      {profile === null ? (
        <Fragment>
          <section className="dashboard">
            <div className="container">
              <Overview user={user} />
              <div className="dashboard__body">
                <Progress />
                <Summary />
              </div>
            </div>
          </section>
          <MonthlyExpenses />
          <Expenses />
        </Fragment>
      ) : (
        <Fragment>
          <section className="setup">
            <div className="container">
              <h1>
                There is no profile. Click here to get{' '}
                <Link to="/create-profile" className="button">
                  started
                </Link>
              </h1>
            </div>
          </section>
        </Fragment>
      )}
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
