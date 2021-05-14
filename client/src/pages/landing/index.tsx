import React, { FC } from 'react';

import {
  Hero,
  SetYourGoals,
  Features,
  WriteDownYourGoals,
  TrackDownEverything,
  SeeYourSpendingLimit,
  CallToAction,
} from './ui';

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
