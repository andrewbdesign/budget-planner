import React, { FC } from 'react';

import { messages } from './messages';

import { Button } from 'ui/elements';

import { Wrapper } from 'ui/common';

import * as S from './styled';

const Features: FC = () => {
  return (
    <S.Section>
      <Wrapper>
        <S.CopyWrapper>
          <S.Heading>{messages.heading}</S.Heading>
          <S.Paragraph>{messages.paragraph}</S.Paragraph>
          <S.ListWrapper>
            <S.List>
              {messages.features.map((feature, index) => (
                <S.ListItem key={index}>{feature}</S.ListItem>
              ))}
            </S.List>
          </S.ListWrapper>
        </S.CopyWrapper>
      </Wrapper>
      <Button to="/register">{messages.cta}</Button>
    </S.Section>
  );
};

export default Features;
