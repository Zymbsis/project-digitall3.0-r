import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/operations';
import { signInFormSchema } from 'validationSchemas';
import { Icon } from 'shared';

import clsx from 'clsx';
import css from './SignInForm.module.css';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = data => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Sign In</h2>
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
