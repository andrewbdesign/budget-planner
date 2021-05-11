import { ChangeEvent, FormEvent, useState } from 'react';

const useLoginUser = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // validateForm();
    // if (errors.length === 0) {
    //   login(email, password);
    // }
  };

  return { formData, onHandleSubmit, onHandleChange };
};

export default useLoginUser;
