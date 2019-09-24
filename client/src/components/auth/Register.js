import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

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
    console.log('hello');
    e.preventDefault();
    // console.log('success');
    if (!password.length > 0) {
      setAlert('congrats you win', 'success');
    } else {
      register({ name, email, password });
    }
  };

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

            <button className="btn">Register</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = { setAlert, register };

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
