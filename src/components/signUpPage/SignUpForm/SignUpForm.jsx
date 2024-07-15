import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import {
  register,
  logIn,
  logOut,
  refreshUser,
} from '../../../redux/auth/operations';
import Icon from '../../../shared/components/Icon/Icon';
import '../../../icons/index';
import clsx from 'clsx';
import css from './SignUpForm.module.css';
import Logo from '../../../shared/components/Logo/Logo';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, 'Must contain at least 8 characters')
    .max(64)
    .required(),
  // confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
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
    reset();
  };

  const onLoginSubmit = data => {
    const { email, password } = data;
    dispatch(logIn({ email, password }));
    reset();
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const handleRefresh = () => {
    dispatch(refreshUser());
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.wrapper}>
      <Logo className={css.singUpLogo} />

      <div className={css.registerContainer}>
        <h2 className={css.title}>Sign Up</h2>
        {/* ------------------------------------------------------------------------- */}
        {/* Форма реєстрації */}
        {/* <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={css.field}>
            Email
            <input
              className={clsx({
                [css.input]: !errors.email,
                [css.inputError]: errors.email,
              })}
              placeholder="Enter your email"
              {...registerField('email', {
                required: true,
              })}
            />
          </label>
          {errors.email && (
            <p className={css.errorsMessage}>{errors.email.message}</p>
          )}

          <label className={css.field}>
            Password
            <input
              className={clsx({
                [css.input]: !errors.password,
                [css.inputError]: errors.password,
              })}
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
              {'Must contain at least 8 characters'}
            </p>
          )}

          <label className={css.field}>
            Repeat password
            <input
              className={clsx({
                [css.input]: !errors.confirmPassword,
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
            <p className={css.errorsMessage}>{'Repeat your password'}</p>
          )}

          <input className={css.submit} type="submit" value="Sign Up" />

          <div className={css.inviteOnLogIn}>
            <p>Already have account?</p>
            <Link className={css.link} to="/signin">
              Sign In
            </Link>
          </div>
          <div>
            <button className={css.logout} type="button" onClick={handleLogOut}>
              Log Out
            </button>
          </div>
        </form> */}

        {/* ------------------------------------------------- */}

        {'#######################'}

        {/* Форма логіну */}

        <form className={css.form} onSubmit={handleSubmit(onLoginSubmit)}>
          <label className={css.field}>
            Email
            <input
              className={clsx({
                [css.input]: !errors.email,
                [css.inputError]: errors.email,
              })}
              placeholder="Enter your email"
              {...registerField('email', {
                required: true,
              })}
            />
          </label>
          {errors.email && (
            <p className={css.errorsMessage}>{errors.email.message}</p>
          )}
          <label className={css.field}>
            Password
            <input
              className={clsx({
                [css.input]: !errors.password,
                [css.inputError]: errors.password,
              })}
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
              {'Must contain at least 8 characters'}
            </p>
          )}

          <input className={css.submit} type="submit" value="Sign In" />
          <div>
            <button
              className={css.logout}
              type="button"
              onClick={handleRefresh}
            >
              Refresh
            </button>
          </div>
          <div>
            <button className={css.logout} type="button" onClick={handleLogOut}>
              Log Out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
