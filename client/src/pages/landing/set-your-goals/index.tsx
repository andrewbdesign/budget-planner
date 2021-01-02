import React, { FC } from 'react';

import lottieSuccess from 'assets/lotties/success.json';

import * as S from './styled';

import { messages } from './messages';

import { Wrapper } from 'ui/common';

const SetYourGoals: FC = () => {
  return (
    <S.Section>
      <Wrapper>
        <S.TextWrapper>
          <S.Heading>{messages.heading}</S.Heading>
          <S.Paragraph>{messages.paragraph}</S.Paragraph>
        </S.TextWrapper>
      </Wrapper>
      <S.LottieWrapper animationData={lottieSuccess} name={'lottieSuccess'} />
    </S.Section>
  );
};

export default SetYourGoals;
