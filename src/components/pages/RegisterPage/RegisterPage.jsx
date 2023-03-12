import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from 'redux/auth/authOperation';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userInfo = {
    name: setName,
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
      userRegister({
        name,
        email,
        password,
      })
    );
    event.target.reset();
  };

  return (
    <>
      <h3 className={css.login}>Registration </h3>
      <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={css.label} label="Name">
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>
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
          />
        </label>
        <button className={css.inputButton} type="submit">
          Signup
        </button>
      </form>
    </>
  );
}
