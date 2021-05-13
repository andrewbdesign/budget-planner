import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from 'actions/auth';

const useLoginUser = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onLoginUser = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { email, password } = formData;
    try {
      await dispatch(login(email, password));
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };

  const onRegisterUser = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { name, email, password } = formData;
    try {
      await dispatch(register({ name, email, password }));
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };

  return {
    onLoginUser,
    onRegisterUser,
    onHandleChange,
    formData,
    isLoading,
  };
};

export default useLoginUser;
