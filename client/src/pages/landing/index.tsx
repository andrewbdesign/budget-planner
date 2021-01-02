import React, { FC } from 'react';

import Hero from './hero';
import SetYourGoals from './set-your-goals';
import Features from './features';

const LandingPage: FC = () => {
  return (
    <>
      <Hero />
      <SetYourGoals />
      <Features />
    </>
  );
};

export default LandingPage;
