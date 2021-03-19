import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { gridSpacing } from 'ui/utils/spacing';

const small = gridSpacing() * 2;
const large = gridSpacing() * 4;

export const Footer = styled.footer`
  background: #151a27;
  color: white;
  padding: ${large}px ${small}px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 180px;
  margin-bottom: ${small}px;
`;

export const Wrapper = styled.div`
  max-width: 50%;
`;

export const LinkWrapper = styled.div`
  width: 25%;
`;

export const Header = styled.h2`
  font-size: 1.6rem;
  margin: ${large}px 0 0;
`;

export const StyledLink = styled(Link)`
  color: grey;
  display: block;
  font-size: 1.4rem;
  line-height: 1.8;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
