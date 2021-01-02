import React, { FC } from 'react';

import { Wrapper as Container } from './styled';

const Wrapper: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
