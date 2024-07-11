import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Container } from 'shared/index.js';
import css from './UserSettingsForm.module.css';

const yupValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Must be at least 3 characters')
    .max(40, 'Must be max 40 characters or less')
    .required('Username is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const UserSettingsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupValidationSchema),
  });
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container>
      <div className={css.modalSettingContent}>
        <h2 className={css.settingTitle}>Setting</h2>
        <div className={css.avatarArea}>
          <div className={css.avatarThumb}></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p>Your gender identity</p>
            <input
              type="radio"
              id="female"
              value="female"
              autoComplete="off"
              defaultChecked
              {...register('gender', { required: true })}
            />
            <label htmlFor="female">Woman</label>
            <input
              type="radio"
              id="male"
              value="male"
              autoComplete="off"
              {...register('gender', { required: true })}
            />
            <label htmlFor="male">Man</label>
            <label htmlFor="username">Your name</label>
            <input id="username" autoComplete="off" {...register('username')} />
            {errors.username && <span>{errors.username.message}</span>}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="off"
              {...register('email')}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
        </form>
      </div>
    </Container>
  );
};

export default UserSettingsForm;
