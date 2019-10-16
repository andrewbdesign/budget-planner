import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';

const Login = ({ login, isAuthenticated, setAlert }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);
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
    validateForm();
    if (errors.length === 0) {
      login(email, password);
    }
  };

  const validateForm = () => {
    const errorsArr = [];
    if (!email.length >= 3) {
      errorsArr.push({
        msg: 'Please use a valid email',
      });
    }

    if (password.length < 6) {
      errorsArr.push({
        msg: 'Please enter a password with 6 or more characters',
      });
    }

    setErrors(errorsArr);
    if (errorsArr.length > 0) {
      errorsArr.forEach(err => setAlert(err.msg, 'danger'));
    }
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

            <button
              className="button"
              disabled={password.length < 6 || email.length < 3}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});
const mapDispatchToProps = { login, setAlert };

Login.propTypes = {
  login: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
