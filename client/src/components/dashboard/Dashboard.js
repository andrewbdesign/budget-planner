import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from 'actions/profile';
import Lottie from 'containers/Lottie/Lottie';

// Components
import Loader from 'components/layout/Loader/Loader.js';
import Overview from './Overview/Overview';
import Progress from './Overview/Progress';
import Summary from './Overview/Summary';
import MonthlyBills from './MonthlyBills/MonthlyBills';
import Expenses from './Expenses/Expenses';
import Dreams from './Dreams/Dreams';

const lottieWelcome = require('assets/lotties/done.json');

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
    <Loader />
  ) : (
    <Fragment>
      {profile !== null ? (
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
          <MonthlyBills />
          <Expenses />
          <Dreams />
        </Fragment>
      ) : (
        <Fragment>
          <section className="profile-setup">
            <div className="container">
              <div className="profile-setup__container">
                {user && (
                  <Fragment>
                    <Lottie
                      animationData={lottieWelcome}
                      className="welcome-animation"
                      loop={false}
                      name="welcome"
                    />
                    <h1>Hi {user.name}!</h1>
                    <p>
                      You have not setup a profile with us yet. Click here to
                      get started
                    </p>
                    <Link to="/create-profile" className="button">
                      Create Profile
                    </Link>
                  </Fragment>
                )}
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
