import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const onHandleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onHandleSubmit = async e => {
    e.preventDefault();
    // @todo use redux to handle auth stuff
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(formData);
      console.log('body', body);
      const res = await axios.post('/api/auth', body, config);
      console.log('JWT', res.data.token);
      setUserAuthenticated(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  if (userAuthenticated) {
    return <Redirect to="dashboard" />;
  }

  return (
    <section className="login">
      <div className="container">
        <div className="login__container">
          <h2>Login</h2>
          <p>Your dreams are waiting</p>
          <form onSubmit={onHandleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={onHandleChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={onHandleChange}
            />

            <p>
              Show password
              <input
                id="show-password"
                value={showPassword}
                name="showPassword"
                onChange={onHandleShowPassword}
                type="checkbox"
              ></input>
            </p>

            <button className="btn">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
