import React, { FC } from 'react';

import lottieBiking from 'assets/lotties/biking.json';

import * as S from './styled';

import { messages } from './messages';

import { Wrapper } from 'ui/common';

const TrackDownEverything: FC = () => {
  return (
    <S.Section>
      <Wrapper>
        <S.LottieWrapper animationData={lottieBiking} name="biking" />
        <S.TextWrapper>
          <S.Heading>{messages.heading}</S.Heading>
          <S.Paragraph>{messages.paragraph}</S.Paragraph>
        </S.TextWrapper>
      </Wrapper>
    </S.Section>
  );
};

export default TrackDownEverything;
