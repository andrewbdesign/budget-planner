import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: #101522;
  color: #cdcdcd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Logo = styled.img`
  width: 170px;
`;

export const StyledLink = styled(Link)`
  color: #cdcdcd;
  text-decoration: underline;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  margin: 0 10px 0 20px;
`;

export const Input = styled.input`
  border: none;
  padding: 6px 10px;
  font-size: 1.6rem;
  box-sizing: border-box;
  background: white;
`;

export const Submit = styled.button`
  font-family: 'Roboto', sans-serif;
  border-radius: 4px;
  padding: 8px 16px;
  border: none;
  margin: 0 8px;
  background: #ffc107;
  color: #212121;
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  min-width: 73px;
  &:hover {
    background: #d39e00;
  }

  :disabled {
    background: grey;
    cursor: not-allowed;
  }
`;
