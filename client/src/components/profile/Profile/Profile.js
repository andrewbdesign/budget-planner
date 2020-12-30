import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteAccount, getCurrentProfile } from 'actions/profile';
import Loader from 'components/layout/Loader/Loader.js';
import { numberWithCommas } from 'utils/numberFormatter';
import Lottie from 'containers/Lottie/Lottie';
import moment from 'moment';

import './Profile.scss';

const lottieCoolGuy = require('assets/lotties/mr-cool.json');

const Profile = ({
  deleteAccount,
  getCurrentProfile,
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const lottiElement = (
    <Lottie
      animationData={lottieCoolGuy}
      className="lottie-container"
      name="cool-guy"
    />
  );

  if (loading) {
    return <Loader />;
  }

  if (profile && !loading) {
    return (
      <section className="profile-setup">
        <div className="container">
          <div className="profile-setup__container">
            <h1>Profile</h1>
            <p>These are your details</p>
            {lottiElement}
            <div className="profile-details">
              <div>
                <h2 className="profile-title">Monthly Income:</h2>{' '}
                <p className="profile-value">
                  ${numberWithCommas(profile.monthlyIncome)}
                </p>
              </div>
              <div>
                <h2 className="profile-title">Current Bank Balance:</h2>{' '}
                <p className="profile-value">
                  ${numberWithCommas(profile.currentBankBalance)}
                </p>
              </div>
              <div>
                <h2 className="profile-title">Payday:</h2>{' '}
                <p className="profile-value">
                  {moment(profile.payDay).format('MMM Do')}
                </p>
              </div>
            </div>
            <Link to="/edit-profile" className="button button-secondary">
              Edit account
            </Link>
            <div onClick={deleteAccount} className="button button-alert">
              Delete account
            </div>
          </div>
        </div>
      </section>
    );
  }
  return <div></div>;
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapStateToDispatch = {
  deleteAccount,
  getCurrentProfile,
};

export default connect(mapStateToProps, mapStateToDispatch)(Profile);
