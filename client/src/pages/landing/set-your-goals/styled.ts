import styled from 'styled-components';
import { Lottie } from 'ui/elements';

export const Section = styled.section`
  text-align: center;
  margin: 0 auto;
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

export const LottieWrapper = styled(Lottie)`
  max-width: 300px;
  margin: 0 auto;
  padding: 4rem 0;
`;
