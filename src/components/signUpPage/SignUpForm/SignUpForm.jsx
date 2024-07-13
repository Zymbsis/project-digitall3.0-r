import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
// import { register } from '../../../redux/auth/operations';
import Icon from '../../../shared/components/Icon/Icon';
import '../../../icons/index';
import clsx from 'clsx';
import css from './SignUpForm.module.css';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, 'Must contain at least 8 characters')
    .max(64)
    .required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = data => {
    const { email, password } = data;
    // dispatch(register({ email, password }));
    reset();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.registerContainer}>
      <h2 className={css.title}>Sign Up</h2>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.field}>
          Email
          <input
            className={clsx({
              [css.input]: !errors.email,
              [css.inputError]: errors.email,
            })}
            placeholder="Enter your email"
            {...register('email', {
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
            {...register('password', { required: true })}
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
            {...register('confirmPassword', { required: true })}
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
      </form>
    </div>
  );
};

export default SignUpForm;
