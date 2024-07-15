import { Form, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import css from './SignInForm.module.css';

const SignInForm = () => {
  const formValidation = Yup.object({
    email: Yup.string('You must enter a valid email!')
      .trim()
      .min(3, 'Too short!')
      .max(30, 'Too long!')
      .required('Email is required!'),
    password: Yup.string('You must enter a valid password!')
      .min(8, 'Too short!')
      .max(50, 'Too long!')
      .required('Password is required!'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <label className={css.labelWrapper}>
        <span className={css.label}>Email: </span>
        <input
          type="email"
          {...register('email')}
          placeholder="Enter your email"
          className={css.input}
        />
        <p className={css.error}>{errors.email?.message}</p>
      </label>
      <label className={css.labelWrapper}>
        <span className={css.label}>Password: </span>
        <input
          type="password"
          {...register('password')}
          placeholder="Enter your password"
          className={css.input}
        />
        <p className={css.error}>{errors.password?.message}</p>
      </label>
      <button type="submit" className={css.button}>
        Sign in
      </button>
    </form>
  );
};

export default SignInForm;
