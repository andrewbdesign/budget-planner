import styled from 'styled-components';
import { PURPLE_MAROON_GRADIENT } from 'ui/utils/gradients';

import tick from 'assets/images/tick.svg';

export const Section = styled.section`
  padding: 5rem 0;
  color: #fff;
  background: ${PURPLE_MAROON_GRADIENT};
  text-align: center;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  text-align: center;
  max-width: 40rem;
  margin: 0 auto;
`;

export const CopyWrapper = styled.div`
  width: 100%;
`;

export const ListWrapper = styled.div`
  justify-content: space-around;
  padding: 4rem 0;
  display: flex;
`;

export const List = styled.ul`
  margin: 0 auto;
  left: 0;
  right: 0;
  width: auto;
  column-count: 1;
  list-style: none;
  font-size: 1.6rem;
  line-height: 1.7;
  padding: 0;

  @media screen and (min-width: 400px) {
    column-count: 2;
  }

  @media screen and (min-width: 800px) {
    width: 80%;
    column-count: 3;
  }
`;

export const ListItem = styled.li`
  &:before {
  content: '';
  display: inline-block;
  height: 20px;
  width: 20px;
  background-image: url(${tick});
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-size: contain;
  position: relative;
  top: 5px;
  left: -10px;
`;
