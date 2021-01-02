import React from 'react';
import { Lottie } from 'ui/elements';

import './SpendingLimit.scss';

const lottieEftpos = require('assets/lotties/payment-success.json');

const SpendingLimit = () => {
  return (
    <section className="spending-limit">
      <div className="container">
        <div>
          <h1>See your spending limit</h1>
          <p>Don't scramble for money towards next pay day.</p>
        </div>
        <Lottie animationData={lottieEftpos} name="eftpos" />
      </div>
    </section>
  );
};

export default SpendingLimit;
