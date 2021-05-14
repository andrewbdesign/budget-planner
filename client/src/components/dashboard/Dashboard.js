import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Dashboard as Dashboard2 } from 'pages/dashboard';

// Libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from 'actions/profile';
import { Lottie } from 'ui/elements';

// Components
import Overview from './Overview/Overview';
import Progress from './Overview/Progress';
import Summary from './Overview/Summary';

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

  if (loading) {
    return <div>Loading...</div>;
  }

  /* Create new profile */
  if (profile === null) {
    return (
      <section className="profile-setup">
        <div className="container">
          <div className="profile-setup__container">
            <Lottie
              animationData={lottieWelcome}
              className="welcome-animation"
              loop={false}
              name="welcome"
            />
            <h1>Hi {user.name}!</h1>
            <p>
              You have not setup a profile with us yet. Click here to get
              started
            </p>
            <Link to="/create-profile" className="button">
              Create Profile
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Dashboard2 />
      <section className="dashboard">
        <div className="container">
          <Overview user={user} />
          <div className="dashboard__body">
            <Progress />
            <Summary />
          </div>
        </div>
      </section>
    </>
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
