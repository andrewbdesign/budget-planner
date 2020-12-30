import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  background: #1d263d;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 170px;
`;

export const MenuList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 2rem;
  &:hover {
    text-decoration: underline;
  }
`;
