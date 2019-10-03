import React from 'react';
import Lottie from '../../assets/libraries/react-lottie';

const defaultOptionsLottie = lottie => {
  return {
    loop: true,
    autoplay: true,
    animationData: require(`../../assets/lotties/${lottie}.json`),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
};

const Goals = () => {
  return (
    <section className="goals">
      <div className="container">
        <div className="goals__container">
          <div className="copy-section">
            <h1 className="goals__heading">Write down your goals</h1>
            <p className="goals__copy">
              See how long it will take for you to achieve it.
            </p>
          </div>
          <div className="lottie-section">
            <Lottie
              options={defaultOptionsLottie('hero-typing')}
              isStopped={false}
              isPaused={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
