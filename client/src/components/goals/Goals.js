import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Lottie from '../../assets/libraries/react-lottie';
import { numberWithCommas } from '../../utils/numberFormatter';
import { TimelineMax, Power1 } from 'gsap';

import PlusIcon from '../../assets/icons/plus.svg';
import CrossIcon from '../../assets/icons/cross.svg';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGoals, removeGoal } from '../../actions/goal';

const Goals = ({ goal: { goals }, getGoals, removeGoal }) => {
  useEffect(() => {
    getGoals();
  }, [getGoals]);

  const animateCardsIn = () => {
    const tl = new TimelineMax();
    tl.staggerFromTo(
      '.card',
      0.3,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, ease: Power1.easeOut },
      0.2,
      0,
    );
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
              <Link to={`/edit-goal/${_id}`} className="button button-tertiary">
                Edit
              </Link>
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
    <div className="lottie-container">
      <Lottie
        options={defaultOptionsLottie('target')}
        eventListeners={[
          {
            eventName: 'complete',
            callback: () => animateCardsIn(),
          },
        ]}
      />
    </div>
  );

  return (
    <section className="goals-overview">
      <div className="container">
        <div className="goals__container">
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
        </div>
      </div>
    </section>
  );
};

Goals.propType = {
  goal: PropTypes.object.isRequired,
  getGoals: PropTypes.func.isRequired,
  removeGoal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  goal: state.goal,
});

const mapDispatchToProps = {
  getGoals,
  removeGoal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Goals);
