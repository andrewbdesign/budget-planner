import { ChangeEvent, FormEvent, useState } from 'react';

const useLoginUser = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isError, setIsError] = useState(false);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (formData.email.length > 3 && formData.password.length > 3) {
      setIsDisabled(false);
      // setIsError(true);
    } else {
      setIsDisabled(true);
      // setIsError(false);
    }
  };

  const onHandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    // validateForm();
    // if (errors.length === 0) {
    //   login(email, password);
    // }
  };

  const onHandleError = () => {
    if (formData.email.length > 0 && formData.email.length < 6) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return {
    onHandleSubmit,
    onHandleChange,
    onHandleError,
    formData,
    isLoading,
    isDisabled,
    isError,
  };
};

export default useLoginUser;
