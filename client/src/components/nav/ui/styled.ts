import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: #151a27;
  color: #cdcdcd;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 170px;
  height: 26px;
`;

export const LogoLink = styled(Link)`
  width: 170px;
  height: 26px;
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

export const Input = styled.input<{ isError: boolean }>`
  border: 2px solid ${props => (props.isError ? 'red' : 'transparent')};
  padding: 4px 8px;
  font-size: 1.4rem;
  box-sizing: border-box;
  background: white;
`;

export const Submit = styled.button`
  font-family: 'Roboto', sans-serif;
  border-radius: 4px;
  border: none;
  margin: 0 8px;
  background: #ffc107;
  color: #212121;
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  min-width: 73px;
  min-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #d39e00;
  }

  :disabled {
    color: #1a1919;
    cursor: not-allowed;
  }
`;

const spinAnimation = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;

  &:after {
    content: ' ';
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 3px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${spinAnimation} 1.2s linear infinite;
  }
`;
