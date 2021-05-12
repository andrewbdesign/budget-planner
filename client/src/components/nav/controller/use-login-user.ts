import { ChangeEvent, FormEvent, useState } from 'react';
import { login } from 'actions/auth';

const useLoginUser = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    const { email, password } = formData;
    setIsDisabled(password.length < 6 || email.length < 3);
  };

  const onHandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { email, password } = formData;
    login(email, password);
  };

  return {
    onHandleSubmit,
    onHandleChange,
    formData,
    isLoading,
    isDisabled,
  };
};

export default useLoginUser;
