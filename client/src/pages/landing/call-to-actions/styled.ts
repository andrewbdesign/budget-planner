import styled from 'styled-components';
import { MAIN_GRADIENT } from 'ui/utils/gradients';

export const Section = styled.section`
  text-align: center;
  margin: 0 auto;
  color: #fff;
  background: ${MAIN_GRADIENT};
`;

export const TextWrapper = styled.div`
  margin: 0 auto;
`;

export const Heading = styled.h1`
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 3rem;
  line-height: 1.6;
`;
