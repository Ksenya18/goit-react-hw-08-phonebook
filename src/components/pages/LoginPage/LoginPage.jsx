import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/auth/authOperation';
import css from './LoginPage.module.css';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userInfo = {
    email: setEmail,
    password: setPassword,
  };

  const handleChange = event => {
    const { name, value } = event.target;
    userInfo[name](value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      userLogin({
        email,
        password,
      })
    );
    event.target.reset();
  };

  return (
    <>
      <h3 className={css.login}>Login</h3>
      <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={css.label} label="Email">
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            onChange={handleChange}
          />
        </label>

        <label className={css.label} label="Password">
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            onChange={handleChange}
            minLength={7}
          />
        </label>

        <button className={css.inputButton} type="submit">
          Login
        </button>
      </form>
    </>
  );
}
