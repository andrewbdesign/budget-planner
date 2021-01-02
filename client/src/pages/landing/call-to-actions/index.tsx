import React, { FC } from 'react';

import * as S from './styled';

import { messages } from './messages';

import { Wrapper } from 'ui/common';
import { Button } from 'ui/elements';

const CallToAction: FC = () => {
  return (
    <S.Section>
      <Wrapper>
        <S.TextWrapper>
          <S.Heading>{messages.heading}</S.Heading>
          <S.Paragraph>{messages.paragraph}</S.Paragraph>
          <Button to="/register">{messages.cta}</Button>
        </S.TextWrapper>
      </Wrapper>
    </S.Section>
  );
};

export default CallToAction;
