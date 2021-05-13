import React, { FC, useState } from 'react';
import * as S from './styled';

import { useValidateUser, useLoginUser } from 'components/nav/controller';

const Register: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    onValidateName,
    onValidateEmail,
    onValidatePassword,
    isNameError,
    isEmailError,
    isPasswordError,
  } = useValidateUser();

  const { formData, onHandleChange, onRegisterUser } = useLoginUser();
  const { email, password, name } = formData;

  const isDisabled = password.length < 6 || email.length < 3;

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Section>
      <S.FormWrapper>
        <S.Heading>Register</S.Heading>
        <S.Body>It's simple as 1, 2, 3.</S.Body>
        <S.Form onSubmit={onRegisterUser}>
          <S.Label htmlFor="name">Name:</S.Label>

          <S.Input
            isError={isNameError}
            id="name"
            name="name"
            type="name"
            onChange={onHandleChange}
            onBlur={() => onValidateName(name)}
          />
          {isNameError && (
            <S.WarningLabel>Please enter valid name</S.WarningLabel>
          )}

          <S.Label htmlFor="email">Email:</S.Label>
          <S.Input
            isError={isEmailError}
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={onHandleChange}
            onBlur={() => onValidateEmail(email)}
          />
          {isEmailError && (
            <S.WarningLabel>Please enter valid email</S.WarningLabel>
          )}

          <S.Label htmlFor="password">Password:</S.Label>
          <S.Input
            isError={isPasswordError}
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={onHandleChange}
            onBlur={() => onValidatePassword(password)}
          />
          {isPasswordError && (
            <S.WarningLabel>
              Please enter valid password that is 6 or more characters
            </S.WarningLabel>
          )}

          <S.Label>
            Show password
            <S.Checkbox checked={showPassword} onChange={toggleShowPassword} />
          </S.Label>
          <S.Button disabled={isDisabled}>Register</S.Button>
        </S.Form>
      </S.FormWrapper>
    </S.Section>
  );
};

export default Register;
