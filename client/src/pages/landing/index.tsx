import React, { FC } from 'react';

import Hero from './hero';
import SetYourGoals from './set-your-goals';
import Features from './features';
import WriteDownYourGoals from './write-down-your-goals';
import TrackDownEverything from './track-down-everything';
import SeeYourSpendingLimit from './see-your-spending-limit';
import CallToAction from './call-to-actions';

const LandingPage: FC = () => {
  return (
    <>
      <Hero />
      <SetYourGoals />
      <Features />
      <WriteDownYourGoals />
      <TrackDownEverything />
      <SeeYourSpendingLimit />
      <CallToAction />
    </>
  );
};

export default LandingPage;
