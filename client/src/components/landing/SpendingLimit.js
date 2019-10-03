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

const SpendingLimit = () => {
  return (
    <section className="spending-limit">
      <div className="container">
        <div className="spending-limit__container">
          <div className="copy-section">
            <h1 className="spending-limit__heading">See your spending limit</h1>
            <p className="spending-limit__copy">
              Don't scramble for money towards next pay day.
            </p>
          </div>
          <div className="lottie-section">
            <Lottie
              options={defaultOptionsLottie('payment-success')}
              isStopped={false}
              isPaused={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpendingLimit;
