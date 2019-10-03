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
const Expenses = () => {
  return (
    <section className="tracking-expenses">
      <div className="container">
        <div className="expenses__container">
          <div className="lottie-section">
            <Lottie
              options={defaultOptionsLottie('biking')}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <div className="copy-section">
            <h1 className="expenses__heading">Track down everything</h1>
            <p className="expenses__copy">
              From Netflix to gym membership. Track it all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expenses;
