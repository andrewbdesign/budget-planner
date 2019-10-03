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

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__container">
          <h1 className="benefits__heading">Set your goals</h1>
          <p className="benefits__copy">
            Long or short. And see how quickly you will be able to achieve them.
            Seriously!
          </p>
          <div className="lottie-container">
            <Lottie
              options={defaultOptionsLottie('success')}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <div className="benefits-group__container">
            <div className="benefit__group">
              <p>
                Write down you goals and see how much it will take for you to
                achieve it. It is usually a lot quicker than what you think.
              </p>
            </div>
            <div className="benefit__group">
              <p>
                Track down all your expenses per month. Everything from Netflix
                to your gym membership you can track here and see how much you
                spend a month.
              </p>
            </div>
            <div className="benefit__group">
              <p>
                See what is your recommened daily spending limit so you don't
                have to be scrambling for money towards next pay day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
