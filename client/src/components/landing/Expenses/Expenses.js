import React from 'react';
import { Lottie } from 'ui/elements';

import './Expenses.scss';

const lottieBiking = require('assets/lotties/biking.json');

const Expenses = () => {
  return (
    <section className="tracking-expenses">
      <div className="container">
        <Lottie animationData={lottieBiking} name={'biking'} />
        <div>
          <h1>Track down everything</h1>
          <p>From Netflix to gym membership. Track it all.</p>
        </div>
      </div>
    </section>
  );
};

export default Expenses;
