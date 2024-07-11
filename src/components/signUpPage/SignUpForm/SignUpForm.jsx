import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch, UseDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
// import { register } from "../../../redux/auth/operations";
import css from './SignUpForm.module.css';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(64).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

const SignUpForm = () => {
  // const dispatch = useDispatch();
  // const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const onSubmit = data => {
  //   dispatchEvent(register(data));
  //   console.log(data);
  // };

  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <div>
      <h2>Sign Up</h2>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.field}>
          <label>Email</label>
          <input
            placeholder="Enter your email"
            {...register('email', { required: true })}
          />
          {errors.email && <p>{'Email is required'}</p>}
        </div>
        <div className={css.field}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: true })}
          />
          {errors.password && <p>{'Password is required'}</p>}
        </div>
        <div className={css.field}>
          <label>Repeat password</label>
          <input
            type="password"
            placeholder="Repeat password"
            {...register('confirmPassword', { required: true })}
          />
          {errors.confirmPassword && <p>{'Password is required'}</p>}
        </div>
        <div className={css.field}>
          <input type="submit" value="Sign Up" onClick={() => reset()} />
        </div>
        <div>
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
