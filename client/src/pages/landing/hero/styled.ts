import styled from 'styled-components';

import { WHITE } from 'ui/utils/colors';
import { PURPLE_GRADIENT } from 'ui/utils/gradients';

export const Section = styled.section`
  background: ${PURPLE_GRADIENT};
  color: ${WHITE};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`;

export const Heading = styled.h1`
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 3rem;
  line-height: 1.6;
`;
