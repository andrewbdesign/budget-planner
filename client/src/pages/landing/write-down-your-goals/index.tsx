import React, { FC } from 'react';

import lottieElephant from 'assets/lotties/hero-typing.json';

import * as S from './styled';

import { messages } from './messages';

import { Wrapper } from 'ui/common';

const WriteDownYourGoals: FC = () => {
  return (
    <S.Section>
      <Wrapper>
        <S.TextWrapper>
          <S.Heading>{messages.heading}</S.Heading>
          <S.Paragraph>{messages.paragraph}</S.Paragraph>
        </S.TextWrapper>
        <S.LottieWrapper animationData={lottieElephant} name="elephant" />
      </Wrapper>
    </S.Section>
  );
};

export default WriteDownYourGoals;
