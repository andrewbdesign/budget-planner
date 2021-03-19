import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { YELLOW, BLACK } from 'ui/utils/colors';
import { gridSpacing } from 'ui/utils/spacing';

const xsmall = gridSpacing() / 2;
const small = gridSpacing();
const large = gridSpacing() * 2;

export const Button = styled(Link)`
  cursor: pointer;
  border: none;
  font-size: 12px;
  background: ${YELLOW};
  color: ${BLACK};
  padding: ${small}px ${large}px;
  border-radius: ${xsmall}px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;
  display: inline-block;
`;
