import React from 'react';
import Lottie from 'containers/Lottie/Lottie';

import './Goals.scss'

const elephant = require('assets/lotties/hero-typing.json');

const Goals = () => {
  return (
    <section className="goals">
      <div className="container">
        <div>
          <h1>Write down your goals</h1>
          <p>
            See how long it will take for you to achieve it.
          </p>
        </div>
        <Lottie animationData={elephant} />
      </div>
    </section>
  );
};

export default Goals;
