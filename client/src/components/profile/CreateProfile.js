import React, { useState, useRef, useEffect } from 'react';
import { TimelineMax, Power1, TweenMax } from 'gsap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import PropTypes from 'prop-types';

// Icons
import Target from '../../assets/icons/target.svg';
import Money from '../../assets/icons/money.svg';
import Wallet from '../../assets/icons/wallet.svg';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    // goal: '',
    // cost: '',
    // savings: '',
    // Second part
    goalTitle: '',
    goalTarget: '',
    totalSaved: '',
    // Saving amount
    savingFrequency: '', // [day, week, fortnight, 3weeks, month]
    savingCommitment: '', // $100
    // Saving duration
    savingDurationMonths: '', // 0-11 months
    savingDurationYears: '', // 0+ years
  });

  const sectionTwo = useRef(null);
  const sectionThree = useRef(null);

  const [saveBy, setSaveBy] = useState('');

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    createProfile(formData, history);
  };

  // console.log({ sectionOne });
  useEffect(() => {
    TweenMax.set(sectionTwo.current.children, { autoAlpha: 0, y: -20 });
    TweenMax.set(sectionThree.current, { autoAlpha: 0, y: -20 });
  }, []);

  const showSecondQuestions = () => {
    const tl = new TimelineMax();
    tl.staggerTo(
      sectionTwo.current.children,
      0.3,
      { autoAlpha: 1, y: 0, ease: Power1.easeOut },
      '0.2',
      0,
    );
  };

  const showThirdQuestions = () => {
    const tl = new TimelineMax();
    tl.to(
      sectionThree.current,
      0.3,
      { autoAlpha: 1, y: 0, ease: Power1.easeOut },
      '0',
    );
  };

  const onHandleSetSaveBy = type => {
    showSecondQuestions();
    setSaveBy(type);
  };

  return (
    <section className="create-profile">
      <div className="container">
        <div className="create-profile__container">
          <h1>Profile setup</h1>
          <h2>I want to:</h2>

          <div className={`question first-section save-by-${saveBy}`}>
            <div onClick={() => onHandleSetSaveBy('date')}>
              See how much I need to save
            </div>
            <div onClick={() => onHandleSetSaveBy('duration')}>
              See how long it will take to save
            </div>
          </div>

          <div ref={sectionTwo} className="question second-section">
            <div>
              <label htmlFor="goal-title">I want to save up for</label>
              <img className="icon-target" src={Target} alt="" />
              <input id="goal-title" name="goalTitle" onChange={onChange} />
            </div>
            <div>
              <label htmlFor="goal-target">This will cost me</label>
              <img className="icon-money" src={Money} alt="" />
              <span className="dollar-prefix">$</span>
              <input id="goal-target" name="goalTarget" onChange={onChange} />
            </div>
            <div>
              <label htmlFor="total-saved">I have saved</label>
              <img className="icon-wallet" src={Wallet} alt="" />
              <span className="dollar-prefix">$</span>
              <input
                id="total-saved"
                name="totalSaved"
                onChange={e => {
                  onChange(e);
                  showThirdQuestions();
                }}
              />
            </div>
          </div>

          <div ref={sectionThree} className="question third-section">
            <div>
              <label htmlFor="saving-commitment">I will be saving</label>
              <input
                id="saving-commitment"
                name="savingCommitment"
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="saving-frequency">Every</label>
              <select
                id="saving-frequency"
                name="savingFrequency"
                onChange={onChange}
              >
                <option default value=""></option>
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="fortnight">Fortnight</option>
                <option value="month">Month</option>
              </select>
              <button className="button" onClick={onSubmit}>
                Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

const mapStateToProps = null;

const mapDispatchToProps = {
  createProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CreateProfile));
