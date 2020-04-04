import React from 'react';
import Lottie from 'components/lottie/Lottie';
import './Benefits.scss';

const success = require('assets/lotties/success.json');

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
      <Lottie animationData={success} />
    </section>
  );
};

export default Benefits;
