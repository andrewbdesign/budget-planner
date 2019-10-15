import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAccount } from '../../actions/profile';

const Profile = ({ deleteAccount }) => {
  return (
    <section className="profile">
      <div className="container">
        <div className="profile__container">
          <h1>Profile</h1>
          <p>These are your details</p>
          <div onClick={deleteAccount} className="button button-alert">
            Delete account
          </div>
        </div>
      </div>
    </section>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapStateToDispatch = {
  deleteAccount,
};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(Profile);
