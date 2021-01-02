import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 960px;
  margin: 0 auto;

  @media screen and (min-width: 400px) {
    flex-direction: row;
  }
`;
