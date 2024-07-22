import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { FcGoogle } from 'react-icons/fc';
import { register } from '../../../redux/auth/operations';
import { signUpFormSchema } from 'validationSchemas';
import { AuthFormLayout, Button, Icon } from 'shared';

import clsx from 'clsx';
import css from './SignUpForm.module.css';
import { AXIOS_INSTANCE } from '../../../redux/constants';
import toast from 'react-hot-toast';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const code = new URLSearchParams(location.search).get('code');
      if (code) {
        try {
          const response = await AXIOS_INSTANCE.post('users/confirm-oauth', {
            code,
          });
          const { accessToken } = response.data.data;
          console.log(accessToken);
        } catch (error) {
          toast.error('Error confirming Google OAuth');
        }
      }
    };

    handleOAuthCallback();
  }, [location]);

  const {
    register: registerField,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpFormSchema),
    mode: 'onSubmit',
  });

  const onSubmit = data => {
    const { email, password } = data;
    const newEmail = email.toLowerCase();
    dispatch(register({ email: newEmail, password }));
    reset();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // google
  const handleGoogleSignIn = async () => {
    try {
      const response = await AXIOS_INSTANCE.get('users/get-oauth-url');
      const { url } = response.data.data;
      window.location.href = url;
    } catch (error) {
      toast.error('Error getting Google OAuth URL');
    }
  };

  return (
    <AuthFormLayout className={css.layout}>
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
        <Button className={css.google_btn} onClick={handleGoogleSignIn}>
          <FcGoogle className={css.icon_google} />
          Sign Up with Google
        </Button>

        <div className={css.inviteOnLogIn}>
          <p className={css.inviteText}>Already have account?</p>
          <Link className={css.link} to="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </AuthFormLayout>
  );
};

export default SignUpForm;
