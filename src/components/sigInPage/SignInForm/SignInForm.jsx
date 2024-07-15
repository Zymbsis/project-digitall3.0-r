import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import css from './SignInForm.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Icon } from 'shared';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formValidation = Yup.object({
    email: Yup.string('You must enter a valid email!')
      .trim()
      .required('Email is required!')
      .min(3, 'Too short!')
      .max(30, 'Too long!'),
    password: Yup.string('You must enter a valid password!')
      .required('Password is required!')
      .min(8, 'Too short!')
      .max(50, 'Too long!'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidation),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Sign in</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <label className={css.labelWrapper}>
          <span className={css.label}>Email: </span>
          <input
            type="email"
            {...register('email')}
            placeholder="Enter your email"
            className={clsx(css.input, { [css.inputError]: errors.email })}
          />
          <p className={css.errorMessage}>{errors.email?.message}</p>
        </label>
        <label className={css.labelWrapper}>
          <span className={css.label}>Password: </span>
          <div className={css.inputWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              placeholder="Enter your password"
              className={clsx(css.input, { [css.inputError]: errors.password })}
            />
            <button
              className={css.showPasswordBtn}
              type="button"
              onClick={handleClickShowPassword}
            >
              {showPassword ? (
                <Icon className={css.icon} iconId="icon-eye-off" />
              ) : (
                <Icon className={css.icon} iconId="icon-eye" />
              )}
            </button>
          </div>
          <p className={css.errorMessage}>{errors.password?.message}</p>
        </label>
        <button type="submit" className={css.button}>
          Sign in
        </button>
      </form>
      <p className={css.signUpText}>
        Don't have an account?{' '}
        <NavLink to="/signup" className={css.signUpLink}>
          Sign Up
        </NavLink>
      </p>
    </div>
  );
};

export default SignInForm;
