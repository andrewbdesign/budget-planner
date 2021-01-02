import React, { FC, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from 'actions/auth';
import { setAlert } from 'actions/alert';

import * as S from './styled';

type Props = {
  login: (email: string, password: string) => void;
  isAuthenticated: boolean;
  setAlert: (message: string, errorType: string) => void;
};

type InputForm = {
  email: string;
  password: string;
};

type ErrorMsg = {
  msg: string;
};

const Login: FC<Props> = ({ login, isAuthenticated, setAlert }) => {
  const [formData, setFormData] = useState<InputForm>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<ErrorMsg[]>([]);
  const [showPassword, setShowPassword] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const { email, password } = formData;

  const onHandleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onHandleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    validateForm();
    if (errors.length === 0) {
      login(email, password);
    }
  };

  const validateForm = () => {
    const errorsArr: ErrorMsg[] = [];
    if (email.length >= 3) {
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
    <S.Section>
      <div className="container">
        <div className="form__container">
          <h2>Login</h2>
          <p>Your dreams are waiting</p>
          <form onSubmit={onHandleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={onHandleChange}
                className={`${emailError ? 'input-warning' : 'input-clear'}`}
                onBlur={() => {
                  setEmailError(
                    formData.email.length > 0 && formData.email.length < 6,
                  );
                }}
              />
              {emailError && (
                <span className="input-warning-text">
                  Please put valid email
                </span>
              )}
            </div>

            <div>
              <label htmlFor="password">Password: </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={onHandleChange}
                className={`${passwordError ? 'input-warning' : 'input-clear'}`}
                onBlur={() => {
                  setPasswordError(
                    formData.password.length > 0 &&
                      formData.password.length < 6,
                  );
                }}
              />
              {passwordError && (
                <span className="input-warning-text">
                  Please enter a password that is 6 or more characters
                </span>
              )}
            </div>
            <button
              className="button"
              disabled={password.length < 6 || email.length < 3}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </S.Section>
  );
};

// TODO: Fix any state
const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
const mapDispatchToProps = { login, setAlert };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
