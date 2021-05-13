import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'actions/auth';

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

  const onHandleSubmit = async (e: FormEvent) => {
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

  return {
    onHandleSubmit,
    onHandleChange,
    formData,
    isLoading,
  };
};

export default useLoginUser;
