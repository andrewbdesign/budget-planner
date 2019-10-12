import React, { useState, useRef, useEffect } from 'react';
import { TimelineMax, Power1, TweenMax } from 'gsap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addGoal } from '../../actions/goal';
import PropTypes from 'prop-types';

// Icons
import Target from '../../assets/icons/target.svg';
import Money from '../../assets/icons/money.svg';
import Wallet from '../../assets/icons/wallet.svg';

const CreateGoal = ({ addGoal, history }) => {
  const [formData, setFormData] = useState({
    goalTitle: '',
    goalTarget: '',
    totalSaved: '',
    savingFrequency: '', // [day, week, fortnight, 3weeks, month]
    savingCommitment: '', // $100
  });

  const sectionOneA = useRef(null);
  const sectionOneB = useRef(null);
  const sectionOneC = useRef(null);
  const sectionOneD = useRef(null);
  const sectionTwo = useRef(null);
  const sectionThree = useRef(null);

  const [saveBy, setSaveBy] = useState('');
  // const [showAnswer, setShowAnswer] = useState(false);

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    // console.log('formData', formData);
    addGoal(formData, history);
  };

  useEffect(() => {
    const introElements = [
      sectionOneA.current,
      sectionOneB.current,
      sectionOneC.current,
      sectionOneD.current,
    ];
    TweenMax.set(sectionTwo.current.children, { autoAlpha: 0, y: -20 });
    TweenMax.set(sectionThree.current, { autoAlpha: 0, y: -20 });
    TweenMax.set(introElements, { y: -20 });
    const tl = new TimelineMax();
    tl.staggerTo(
      introElements,
      0.8,
      { autoAlpha: 1, y: 0, ease: Power1.easeOut },
      '0.2',
      1,
    );
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
          <h1 className="create-profile__heading" ref={sectionOneA}>
            Goal setup
          </h1>
          <h2 className="create-profile__heading" ref={sectionOneB}>
            I want to:
          </h2>

          <div className={`question first-section save-by-${saveBy}`}>
            <div ref={sectionOneC} onClick={() => onHandleSetSaveBy('date')}>
              See how much I need to save
            </div>
            <div
              ref={sectionOneD}
              onClick={() => onHandleSetSaveBy('duration')}
            >
              See how long it will take to save
            </div>
          </div>

          <div ref={sectionTwo} className="question second-section">
            <div>
              <label htmlFor="goal-target">I want to save up</label>
              <img className="icon-money" src={Money} alt="" />
              <span className="dollar-prefix">$</span>
              <input
                id="goal-target"
                name="goalTarget"
                onChange={onChange}
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="total-saved">So far I have saved</label>
              <img className="icon-wallet" src={Wallet} alt="" />
              <span className="dollar-prefix">$</span>
              <input
                id="total-saved"
                name="totalSaved"
                onChange={onChange}
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="goal-title">Because my goal is to get </label>
              <img className="icon-target" src={Target} alt="" />
              <input
                id="goal-title"
                name="goalTitle"
                onChange={e => {
                  onChange(e);
                  showThirdQuestions();
                }}
                autoComplete="off"
              />
            </div>
          </div>

          <div ref={sectionThree} className="question third-section">
            <div>
              <label htmlFor="saving-commitment">I will be saving</label>${' '}
              <input
                id="saving-commitment"
                name="savingCommitment"
                onChange={onChange}
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="saving-frequency">Every</label>
              <select
                id="saving-frequency"
                name="savingFrequency"
                onChange={onChange}
              >
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option default value="fortnight">
                  Fortnight
                </option>
                <option value="month">Month</option>
              </select>
              <button className="button" onClick={onSubmit}>
                Create Goal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CreateGoal.propTypes = {
  addGoal: PropTypes.func.isRequired,
};

const mapStateToProps = null;

const mapDispatchToProps = {
  addGoal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CreateGoal));
