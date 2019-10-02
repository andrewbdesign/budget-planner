import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Lottie from '../assets/libraries/react-lottie';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const defaultOptionsLottie = lottie => {
    return {
      loop: true,
      autoplay: true,
      animationData: require(`../assets/lotties/${lottie}.json`),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  };

  return (
    <Fragment>
      <section className="header">
        <div className="container">
          <div className="header__container">
            <div className="copy-section">
              <h1 className="header__heading">
                A simple dream cost calculator
              </h1>
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
      <section className="benefits">
        <div className="container">
          <div className="benefits__container">
            <h1 className="benefits__heading">Set your goals</h1>
            <p className="benefits__copy">
              Long or short. And see how quickly you will be able to achieve
              them. Seriously!
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
                  Track down all your expenses per month. Everything from
                  Netflix to your gym membership you can track here and see how
                  much you spend a month.
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
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps)(Landing);
