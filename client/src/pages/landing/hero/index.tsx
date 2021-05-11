import React, { FC } from 'react';
import { Button, Lottie } from 'ui/elements';

import { messages } from './messages';
import lottieLaptop from 'assets/lotties/ecommerce.json';

import { Wrapper } from 'ui/common';
import * as S from './styled';

const Hero: FC = () => {
  return (
    <S.Section>
      <Wrapper>
        <div>
          <S.Heading>{messages.heading}</S.Heading>
          <S.Paragraph>{messages.paragraph}</S.Paragraph>
          <Button to="/register">{messages.cta}</Button>
        </div>
        <Lottie
          animationData={lottieLaptop}
          name="laptop"
          maxWidth={536}
          maxHeight={586}
        />
      </Wrapper>
    </S.Section>
  );
};

export default Hero;
