import React from 'react';
import { Lottie } from 'ui/elements';

import './Goals.scss';

const lottieElephant = require('assets/lotties/hero-typing.json');

const Goals = () => {
  return (
    <section className="goals">
      <div className="container">
        <div>
          <h1>Write down your goals</h1>
          <p>See how long it will take for you to achieve it.</p>
        </div>
        <Lottie animationData={lottieElephant} name="elephant" />
      </div>
    </section>
  );
};

export default Goals;
