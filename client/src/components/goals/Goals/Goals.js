import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'containers/Lottie/Lottie';
import { numberWithCommas } from 'utils/numberFormatter';
// import { TimelineMax, Power1 } from 'gsap';

import PlusIcon from 'assets/icons/plus.svg';
import CrossIcon from 'assets/icons/cross.svg';

// Edit form icons
import Target from 'assets/icons/target.svg';
import Money from 'assets/icons/money.svg';
import Wallet from 'assets/icons/wallet.svg';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGoals, removeGoal, updateGoal } from 'actions/goal';

import './Goal.scss';

const lottieTarget = require('assets/lotties/target.json');

const Goals = ({ goal: { goals }, getGoals, removeGoal, updateGoal }) => {
  const [isEditingGoal, setIsEditingGoal] = useState(false);
  const [formData, setFormData] = useState({
    goalTitle: '',
    goalTarget: '',
    totalSaved: '',
    savingFrequency: '',
    savingCommitment: '',
    id: '',
    achieved: '',
  });

  const clearForm = () => {
    setFormData({
      goalTitle: '',
      goalTarget: '',
      totalSaved: '',
      savingFrequency: '',
      savingCommitment: '',
      id: '',
      achieved: '',
    });
  };

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const {
      id,
      goalTitle,
      goalTarget,
      totalSaved,
      savingFrequency,
      savingCommitment,
      achieved,
    } = formData;

    const newFormData = {};
    if (id) newFormData.id = id;
    if (goalTitle) newFormData.goalTitle = goalTitle;
    if (goalTarget) newFormData.goalTarget = parseFloat(goalTarget);
    if (totalSaved) newFormData.totalSaved = parseFloat(totalSaved);
    if (savingFrequency) newFormData.savingFrequency = savingFrequency;
    if (savingCommitment)
      newFormData.savingCommitment = parseFloat(savingCommitment);
    newFormData.achieved = achieved;

    updateGoal(newFormData);
    setIsEditingGoal(false);
    clearForm();
  };

  useEffect(() => {
    getGoals();
    // animateCardsIn()
  }, [getGoals]);

  // const animateCardsIn = () => {
  //   const tl = new TimelineMax();
  //   tl.staggerFrom(
  //     '.card',
  //     0.3,
  //     { opacity: 0, autoAlpha: 0, y: 10, ease: Power1.easeOut },
  //     0.2,
  //     1,
  //   );
  // };

  const animateCardsOut = () => {
    setIsEditingGoal(true);
    // const tl = new TimelineMax();
    // tl.staggerTo(
    //   '.card',
    //   0.3,
    //   {
    //     autoAlpha: 0,
    //     y: 10,
    //     ease: Power1.easeOut,
    //     onComplete() {
    //       setIsEditingGoal(true);
    //     },
    //   },
    //   0.2,
    //   0.5,
    // );
  };

  const renderGoalsCard = () => {
    return goals.map((goal, index) => {
      const { goalTitle, goalTarget, totalSaved, _id } = goal;
      return (
        <div className="card__link" key={index}>
          <div className="card">
            <h2 className="card__name">{goalTitle}</h2>
            <p className="card__saved">
              Saved: ${numberWithCommas(totalSaved)}
            </p>
            <p className="card__target">
              Target: ${numberWithCommas(goalTarget)}
            </p>
            <div className="button-container">
              <Link to="/dashboard" className="button button-secondary">
                Go
              </Link>
              <div
                className="button button-tertiary"
                onClick={() => {
                  animateCardsOut();
                  setFormData({
                    ...formData,
                    goalTitle: goal.goalTitle,
                    goalTarget: goal.goalTarget,
                    totalSaved: goal.totalSaved,
                    savingFrequency: goal.savingFrequency,
                    savingCommitment: goal.savingCommitment,
                    id: goal._id,
                    achieved: goal.achieved,
                  });
                }}
              >
                Edit
              </div>
              <div
                className="button button-delete"
                onClick={e => {
                  e.preventDefault();
                  removeGoal(_id);
                }}
              >
                <img src={CrossIcon} alt="delete" />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const createNewGoalCard = () => (
    <Link className="card__link card__new-goal" to="/create-goal">
      <div className="card">
        <h2 className="card__name">Create new goal</h2>
        <img src={PlusIcon} className="plus-icon" alt="" />
      </div>
    </Link>
  );

  const lottiElement = (
    <Lottie
      animationData={lottieTarget}
      className="lottie-container"
      loop={false}
      name="target"
    />
  );

  const [saveBy, setSaveBy] = useState('date');

  const firstQuestions = (
    <Fragment>
      <div className={`question first-section save-by-${saveBy}`}>
        <div onClick={() => setSaveBy('date')}>See how much I need to save</div>
        <div onClick={() => setSaveBy('duration')}>
          See how long it will take to save
        </div>
      </div>
    </Fragment>
  );

  const secondQuestions = (
    <Fragment>
      <div className="question second-section">
        <div>
          <label htmlFor="goal-target">I want to save up</label>
          <img className="icon-money" src={Money} alt="" />
          <span className="dollar-prefix">$</span>
          <input
            id="goal-target"
            name="goalTarget"
            value={formData.goalTarget}
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
            value={formData.totalSaved}
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
            value={formData.goalTitle}
            onChange={onChange}
            autoComplete="off"
          />
        </div>
      </div>
    </Fragment>
  );

  const thirdQuestions = (
    <div className="question third-section">
      <div>
        <label htmlFor="saving-commitment">I will be saving</label>${' '}
        <input
          id="saving-commitment"
          name="savingCommitment"
          value={formData.savingCommitment}
          onChange={onChange}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="saving-frequency">Every</label>
        <select
          id="saving-frequency"
          name="savingFrequency"
          value={formData.savingFrequency}
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
          Update
        </button>
        <button
          className="button button-secondary"
          onClick={() => {
            clearForm();
            setIsEditingGoal(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );

  return (
    <section className={isEditingGoal ? 'edit-goal' : 'goals-overview'}>
      <div className="container">
        <div className="goals__container">
          {isEditingGoal ? (
            <Fragment>
              <h1 className="goals__heading">Edit goal:</h1>
              {firstQuestions}
              {secondQuestions}
              {thirdQuestions}
            </Fragment>
          ) : (
            <Fragment>
              <h1 className="goals__heading">Goals</h1>
              <p className="goals__copy">
                {goals && goals.length > 0 ? (
                  <Fragment>Please select one of your goals</Fragment>
                ) : (
                  <Fragment>Click create goal</Fragment>
                )}
              </p>
              {lottiElement}
              <div className="card__container">
                {goals && goals.length > 0 && (
                  <Fragment>{renderGoalsCard()}</Fragment>
                )}
                {createNewGoalCard()}
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </section>
  );
};

Goals.propType = {
  goal: PropTypes.object.isRequired,
  getGoals: PropTypes.func.isRequired,
  removeGoal: PropTypes.func.isRequired,
  updateGoal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  goal: state.goal,
});

const mapDispatchToProps = {
  getGoals,
  removeGoal,
  updateGoal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
