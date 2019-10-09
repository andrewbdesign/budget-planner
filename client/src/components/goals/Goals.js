import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from '../../assets/libraries/react-lottie';
import { numberWithCommas } from '../../utils/numberFormatter';
import { TimelineMax, Power1 } from 'gsap';
import PlusIcon from '../../assets/icons/plus.svg';

const Goals = () => {
  const [lottieIsPlaying, setLottieIsPlaying] = useState(false);

  const goalsCard = [
    {
      name: 'DMC DeLorean',
      target: 20000,
      saved: 6000,
    },
    {
      name: 'Holiday in San Francisco',
      target: 24000,
      saved: 0,
    },
    {
      name: 'Mirorless Camera',
      target: 600,
      saved: 0,
    },
  ];

  useEffect(() => {
    setLottieIsPlaying(true);
    animateCardsIn();
  }, []);

  const animateCardsIn = () => {
    const tl = new TimelineMax();
    tl.staggerFromTo(
      '.card',
      0.3,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, ease: Power1.easeOut },
      0.2,
      '0.5',
    );
  };

  const defaultOptionsLottie = lottie => {
    return {
      loop: false,
      autoplay: lottieIsPlaying,
      animationData: require(`../../assets/lotties/${lottie}.json`),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  };

  const renderGoalsCard = () => {
    return goalsCard.map((card, index) => {
      const { name, target, saved } = card;
      return (
        <Link className="card__link" key={index} to="/dashboard">
          <div className="card">
            <h2 className="card__name">{name}</h2>
            <p className="card__saved">Saved: ${numberWithCommas(saved)}</p>
            <p className="card__target">Target: ${numberWithCommas(target)}</p>
          </div>
        </Link>
      );
    });
  };

  const createNewGoalCard = () => (
    <Link className="card__link card__new-goal" to="/create-profile">
      <div className="card">
        <h2 className="card__name">Create new goal</h2>
        <img src={PlusIcon} className="plus-icon" alt="" />
      </div>
    </Link>
  );

  return (
    <section className="goals-overview">
      <div className="container">
        <div className="goals__container">
          <h1 className="goals__heading">Goals</h1>
          <p className="goals__copy">Please select one of your goals</p>
          <div className="lottie-container">
            <Lottie options={defaultOptionsLottie('target')} />
          </div>
          <div className="card__container">
            {renderGoalsCard()}
            {createNewGoalCard()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
