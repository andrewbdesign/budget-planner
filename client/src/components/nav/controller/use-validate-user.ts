import { useState } from 'react';

const useValidateUser = () => {
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isNameError, setIsNameError] = useState(false);

  const onValidateName = (name: string) => {
    setIsNameError(name.length > 0 && name.length < 2);
  };

  const onValidateEmail = (email: string) => {
    setIsEmailError(email.length > 0 && email.length < 6);
  };

  const onValidatePassword = (password: string) => {
    setIsPasswordError(password.length > 0 && password.length < 6);
  };

  return {
    isEmailError,
    isPasswordError,
    isNameError,
    onValidateEmail,
    onValidatePassword,
    onValidateName,
  };
};

export default useValidateUser;
