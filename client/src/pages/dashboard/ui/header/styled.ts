import styled from 'styled-components';

export const NavHeader = styled.div`
  background: #263149;
  color: #818ca8;
  padding: 20px;
  border-radius: 5px 5px 0 0;
`;

export const NavBody = styled.div`
  background: #1d263d;
  padding: 20px;
  border-radius: 0 0 5px 5px;
  margin-bottom: 20px;
  color: #e3e3e3;
  p {
    font-size: 1.3rem;
    color: #818ca8;

    span {
      color: #e3e3e3;
      text-decoration: underline;
    }
  }
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  span {
    color: #e3e3e3;
  }
`;

export const Description = styled.p`
  font-size: 1.3rem;
`;

export const OverviewStats = styled.div`
  column-count: 1;
  width: 100%;

  div {
    padding-bottom: 10px;
  }
`;
