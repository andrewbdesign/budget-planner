import React, { FC } from 'react';

import lottiePayment from 'assets/lotties/payment-success.json';

import * as S from './styled';

import { messages } from './messages';

import { Wrapper } from 'ui/common';

const SeeYourSpendingLimit: FC = () => {
  return (
    <S.Section>
      <Wrapper>
        <S.TextWrapper>
          <S.Heading>{messages.heading}</S.Heading>
          <S.Paragraph>{messages.paragraph}</S.Paragraph>
        </S.TextWrapper>
        <S.LottieWrapper animationData={lottiePayment} name="payment" />
      </Wrapper>
    </S.Section>
  );
};

export default SeeYourSpendingLimit;
