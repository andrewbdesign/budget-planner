import React, { useState, useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import { withRouter, Link } from 'react-router-dom';

import Wallet from '../../assets/icons/wallet.svg';
import Calendar from '../../assets/icons/calendar.svg';
import Money from '../../assets/icons/money.svg';

import Lottie from '../../assets/libraries/react-lottie';
import Loader from '../layout/Loader';

const EditProfile = ({
  createProfile,
  getCurrentProfile,
  history,
  profile: { loading, profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
    if (profile) {
      setFormData({
        monthlyIncome: profile.monthlyIncome || '', // Optional.
        payDay: profile.payDay || '', // Required if monthly income is filled
        currentBankBalance: profile.currentBankBalance || '', // required
      });
    }
  }, [loading]);

  const [formData, setFormData] = useState({
    monthlyIncome: '', // Optional.
    payDay: '', // Required if monthly income is filled
    currentBankBalance: '', // required
  });

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    createProfile(formData, history, true);
  };

  const defaultOptionsLottie = lottie => {
    return {
      loop: false,
      autoplay: true,
      animationData: require(`../../assets/lotties/${lottie}.json`),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  };

  const lottiElement = (
    <div className="lottie-container">
      <Lottie width={300} options={defaultOptionsLottie('pencil')} />
    </div>
  );

  const questions = (
    <div className="question second-section">
      <div style={{ opacity: 1 }}>
        <label htmlFor="monthly-income">Every month I make</label>
        <img className="icon-money" src={Money} alt="" />
        <span className="dollar-prefix">$</span>
        <input
          id="monthly-income"
          name="monthlyIncome"
          value={formData.monthlyIncome}
          onChange={onChange}
          autoComplete="off"
        />
      </div>
      <div style={{ opacity: 1 }}>
        <label htmlFor="current-bank-balance">
          In my bank account I have right now
        </label>
        <img className="icon-wallet" src={Wallet} alt="" />
        <span className="dollar-prefix">$</span>
        <input
          id="current-bank-balance"
          name="currentBankBalance"
          onChange={onChange}
          value={formData.currentBankBalance}
          autoComplete="off"
        />
      </div>
      <div style={{ opacity: 1 }}>
        <label htmlFor="pay-day">I get paid on</label>
        <img className="icon-target" src={Calendar} alt="" />
        <input
          id="pay-day"
          name="payDay"
          onChange={onChange}
          value={formData.payDay}
          autoComplete="off"
        />
      </div>
    </div>
  );

  if (loading) {
    return <Loader />;
  }

  if (profile) {
    return (
      <section className="create-profile">
        <div className="container">
          <div className="create-profile__container">
            <h1>Profile update</h1>
            {lottiElement}
            {questions}
            <div className="answer-section">
              <div className="button budget-plan" onClick={onSubmit}>
                Update Profile
              </div>
              <Link to="/profile" className="button button-cancel">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <div></div>;
};

EditProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapStateToDispatch = {
  createProfile,
  getCurrentProfile,
};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(withRouter(EditProfile));
