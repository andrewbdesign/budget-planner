import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

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
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
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

            <button className="button">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});
const mapDispatchToProps = { login };

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
