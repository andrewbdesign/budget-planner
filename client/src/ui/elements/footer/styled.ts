import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
  background: #151a27;
  color: white;
  padding: 50px 20px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 180px;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.h2`
  font-size: 1.6rem;
  margin: 30px 0 0;
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
