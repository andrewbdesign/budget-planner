import React from 'react';
import Lottie from 'containers/Lottie/Lottie';

import './SpendingLimit.scss'

const eftpos = require('assets/lotties/payment-success.json');

const SpendingLimit = () => {
  return (
    <section className="spending-limit">
      <div className="container">
        <div >
          <h1>See your spending limit</h1>
          <p>
            Don't scramble for money towards next pay day.
          </p>
        </div>
        <Lottie animationData={eftpos} />
      </div>
    </section>
  );
};

export default SpendingLimit;
