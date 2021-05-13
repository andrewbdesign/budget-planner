import styled from 'styled-components';
import { BLUE_GRADIENT } from 'ui/utils/gradients';

export const Section = styled.section`
  background: ${BLUE_GRADIENT};
`;

export const FormWrapper = styled.div`
  max-width: 400px;
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  cursor: pointer;
  border-top: 5px solid #1d263d;
  box-shadow: 1px 1px 13px -1px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
`;

export const Heading = styled.h2`
  font-size: 26px;
`;

export const Body = styled.p`
  font-size: 1.3rem;
`;

export const Form = styled.form`
  margin: 20px 0 0;
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: $black;
`;

export const WarningLabel = styled.span`
  color: #ff001e;
  margin: 0 0 5px;
  display: block;
`;

export const Input = styled.input<{ isError: boolean }>`
  width: 100%;
  padding: 6px 0 6px 10px;
  height: 38px;
  font-size: 1.6rem;
  margin: 5px 0;
  box-sizing: border-box;
  background: #f6f5f5;
  border: ${props => (props.isError ? '2px solid red' : '1px solid#e3e3e3')};
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;
  display: block;
  margin-top: 20px;
  background: #ffc107;
  color: #212121;
  :disabled {
    background: #dadada;
    color: #656262;
    cursor: not-allowed;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: inline-block;
  width: auto;
  height: auto;
  margin-left: 10px;
  margin-bottom: 20px;
`;
