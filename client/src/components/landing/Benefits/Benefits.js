import React from 'react';
import { Lottie } from 'ui/elements';
import './Benefits.scss';

const lottieSuccess = require('assets/lotties/success.json');

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <h1>Set your goals</h1>
        <p>
          Long or short. And see how quickly you will be able to achieve them.
          Seriously!
        </p>
      </div>
      <Lottie animationData={lottieSuccess} name={'lottieSuccess'} />
    </section>
  );
};

export default Benefits;
