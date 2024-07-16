import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { register } from '../../../redux/auth/operations';

import { useDispatch } from 'react-redux';
import css from './SignUpForm.module.css';

import { Icon, Logo } from '../../../shared';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, 'must contain at least 8 characters')
    .max(64)
    .required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register: registerField,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = data => {
    const { email, password } = data;
    dispatch(register({ email, password }));
    console.log({ email, password });

    reset();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.wrapper}>
      <Logo className={css.singUpLogo} />

      <div className={css.registerContainer}>
        <h2 className={css.title}>Sign Up</h2>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <label
            className={clsx(css.field, { [css.errorField]: errors.email })}
          >
            Email
            <input
              className={clsx(css.input, { [css.inputError]: errors.email })}
              placeholder="Enter your email"
              {...registerField('email', {
                required: true,
              })}
            />
          </label>
          {errors.email && (
            <p className={css.errorsMessage}>{errors.email.message}</p>
          )}

          <label
            className={clsx(css.field, { [css.errorField]: errors.password })}
          >
            Password
            <input
              className={clsx(css.input, { [css.inputError]: errors.password })}
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              {...registerField('password', { required: true })}
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
          </label>
          {errors.password && (
            <p className={css.errorsMessage}>
              {'must contain at least 8 characters'}
            </p>
          )}

          <label
            className={clsx(css.field, {
              [css.errorField]: errors.confirmPassword,
            })}
          >
            Repeat password
            <input
              className={clsx(css.input, {
                [css.inputError]: errors.confirmPassword,
              })}
              type={showPassword ? 'text' : 'password'}
              placeholder="Repeat password"
              {...registerField('confirmPassword', { required: true })}
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
          </label>
          {errors.confirmPassword && (
            <p className={css.errorsMessage}>{'password does not match'}</p>
          )}

          <input className={css.submit} type="submit" value="Sign Up" />
        </form>
        <div className={css.inviteOnLogIn}>
          <p className={css.inviteText}>Already have account?</p>
          <Link className={css.link} to="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
