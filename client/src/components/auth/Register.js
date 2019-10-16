import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState([]);
  const { name, email, password } = formData;

  const [showPassword, setShowPassword] = useState(false);

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
      register({ name, email, password });
    }
  };

  const validateForm = () => {
    const errorsArr = [];
    if (!name.length >= 1) {
      errorsArr.push({
        msg: 'Please enter a name',
      });
    }

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
    <section className="register">
      <div className="container">
        <div className="register__container">
          <h2>Register</h2>
          <p>It's simple as 1, 2, 3.</p>
          <form onSubmit={onHandleSubmit}>
            <label htmlFor="email">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={onHandleChange}
            />
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
              disabled={
                name.length < 1 || password.length < 6 || email.length < 3
              }
            >
              Register
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
const mapDispatchToProps = { setAlert, register };

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
