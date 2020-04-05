import React, { useState } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProfile } from '../../actions/profile';
import { withRouter } from 'react-router-dom';

import Wallet from '../../assets/icons/wallet.svg';
import Calendar from '../../assets/icons/calendar.svg';
import Money from '../../assets/icons/money.svg';

import Lottie from 'containers/Lottie/Lottie'
import { setAlert } from '../../actions/alert';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import uuid from 'uuid';
import moment from 'moment';

const pencilLottie = require('assets/lotties/pencil.json')

const CreateProfile = ({ createProfile, setAlert, history }) => {
  const [formData, setFormData] = useState({
    monthlyIncome: '', // Optional.
    payDay: moment(), // Required if monthly income is filled
    currentBankBalance: '', // required
  });

  const { monthlyIncome, payDay, currentBankBalance } = formData;
  const [calendarFocused, setCalendarFocused] = useState(false);

  const [monthlyIncomeError, setMonthlyIncomeError] = useState(false);
  const [currentBankBalanceError, setCurrentBankBalanceError] = useState(false);
  const [errors, setErrors] = useState([]);

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    validateForm();
    if (errors.length === 0) {
      createProfile(formData, history);
    }
  };

  const onDateChange = createdAt => {
    setFormData({
      ...formData,
      payDay: createdAt,
    });
  };

  const onFocusChange = ({ focused }) => {
    setCalendarFocused(focused);
  };

  const validateForm = () => {
    const errorsArr = [];

    // Check if fields are empty
    if (!monthlyIncome.length >= 1) {
      errorsArr.push({
        msg: 'Please enter your monthly income',
      });
    }
    if (!currentBankBalance.length >= 1) {
      errorsArr.push({
        msg: 'Please enter your current bank balance',
      });
    }

    // Check if the inputs are valid numbers
    if (isNaN(monthlyIncome)) {
      errorsArr.push({
        msg: 'Please enter a valid monthly income',
      });
    }

    if (isNaN(currentBankBalance)) {
      errorsArr.push({
        msg: 'Please enter a valid current Bank Balance',
      });
    }

    setErrors(errorsArr);
    if (errorsArr.length > 0) {
      errorsArr.forEach(err => setAlert(err.msg, 'danger'));
    }
  };

  const lottiElement = (
    <Lottie
      className="lottie-container"
      animationData={pencilLottie}
      loop={true} />
  );

  const questions = (
    <div className="question second-section">
      <div className="editing-profile" style={{ opacity: 1 }}>
        <label htmlFor="monthly-income">Every month I make</label>
        <img className="icon-money" src={Money} alt="" />
        <span className="dollar-prefix">$</span>
        <input
          id="monthly-income"
          name="monthlyIncome"
          value={formData.monthlyIncome}
          onChange={onChange}
          autoComplete="off"
          className={`${monthlyIncomeError ? 'input-warning' : 'input-clear'}`}
          onBlur={() => {
            setMonthlyIncomeError(monthlyIncome.length <= 1);
          }}
        />
        {monthlyIncomeError && (
          <p className="input-warning-text">Please put valid monthly income</p>
        )}
      </div>
      <div className="editing-profile" style={{ opacity: 1 }}>
        <label htmlFor="current-bank-balance">
          In my bank account I have right now
        </label>
        <img className="icon-wallet" src={Wallet} alt="" />
        <span className="dollar-prefix">$</span>
        <input
          id="current-bank-balance"
          name="currentBankBalance"
          value={formData.currentBankBalance}
          onChange={onChange}
          autoComplete="off"
          className={`${
            currentBankBalanceError ? 'input-warning' : 'input-clear'
          }`}
          onBlur={() => {
            setCurrentBankBalanceError(currentBankBalance.length <= 1);
          }}
        />
        {currentBankBalanceError && (
          <p className="input-warning-text">
            Please put a valid current bank balance
          </p>
        )}
      </div>
      <div className="editing-profile" style={{ opacity: 1 }}>
        <label htmlFor="pay-day">I get paid on</label>
        <img className="icon-target" src={Calendar} alt="" />
        {/*<input
          id="pay-day"
          name="payDay"
          value={formData.payDay}
          onChange={onChange}
          autoComplete="off"
          className={`${payDayError ? 'input-warning' : 'input-clear'}`}
          onBlur={() => {
            setPayDayError(payDay.length <= 1);
          }}
        />*/}
        <SingleDatePicker
          date={payDay}
          onDateChange={onDateChange}
          focused={calendarFocused}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          id={uuid.v4()}
          isOutsideRange={() => false}
        />
      </div>
    </div>
  );

  return (
    <section className="create-profile">
      <div className="container">
        <div className="create-profile__container">
          <h1>Profile setup</h1>
          {lottiElement}
          {questions}
          <div className="answer-section">
            <div className="button budget-plan" onClick={onSubmit}>
              Create Profile
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapStateToDispatch = {
  createProfile,
  setAlert,
};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(withRouter(CreateProfile));
