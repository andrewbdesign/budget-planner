import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
  background: #151a27;
  color: #e3e3e3;
  padding: 50px 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LogoGroup = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Logo = styled.img`
  width: 180px;
  margin-bottom: 30px;
`;

export const Description = styled.p`
  line-height: 1.8;
  font-size: 1.4rem;
  max-width: 600px;
  color: #818ca8;
`;

export const Disclaimer = styled.span`
  color: #e3e3e3;
`;

export const Heading = styled.h3`
  font-size: 1.6rem;
  margin: 30px 0 0;

  @media (min-width: 768px) {
    margin: 0 0 20px;
  }
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  column-count: 1;
  column-gap: 0;

  @media (min-width: 768px) {
    column-count: 2;
    column-gap: 60px;
  }
`;

export const StyledLink = styled(Link)`
  color: #818ca8;
  font-size: 1.4rem;
  line-height: 1.8;

  &:hover {
    color: #fff;
  }
`;
