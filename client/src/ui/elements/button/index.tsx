import React, { FC } from 'react';

import { Button as ButtonElement } from './styled';

import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, to }) => {
  return <ButtonElement to={to}>{children}</ButtonElement>;
};

export default Button;
