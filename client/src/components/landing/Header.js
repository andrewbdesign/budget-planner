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

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="header__container">
          <div className="copy-section">
            <h1 className="header__heading">A simple dream cost calculator</h1>
            <p className="header__copy">
              Create realistic budget goals for your dreams!
            </p>
            <a className="header-button button" href="#!">
              Learn how
            </a>
          </div>
          <div className="lottie-section">
            <Lottie
              options={defaultOptionsLottie('ecommerce')}
              isStopped={false}
              isPaused={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
