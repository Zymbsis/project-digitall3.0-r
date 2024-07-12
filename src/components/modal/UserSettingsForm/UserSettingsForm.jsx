import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Container, Icon } from 'shared/index.js';
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
          <div className={css.avatarThumb}>
            <div className={css.avatar}></div>
            <button className={css.uploadButton}>
              {<Icon className={css.uploadIcon} iconId="icon-upload" />}Upload a
              photo
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 className={css.settingBoldTitle}>Your gender identity</h4>
          <div className={css.genderInputs}>
            <div className={css.radioInput}>
              <input
                type="radio"
                id="female"
                name="genderGroup"
                value="female"
                autoComplete="off"
                defaultChecked
                // hidden
                {...register('gender', { required: true })}
              />
              <label htmlFor="female" className={css.radioStyle}>
                Woman
              </label>
            </div>
            <div className={css.radioInput}>
              <input
                type="radio"
                id="male"
                name="genderGroup"
                value="male"
                autoComplete="off"
                // hidden
                {...register('gender', { required: true })}
              />
              <label htmlFor="male" className={css.radioStyle}>
                Man
              </label>
            </div>
          </div>
          <div className={css.toColumns}>
            <div>
              <div className={css.nameEmailBlock}>
                <div className={css.baseInput}>
                  <label className={css.settingBoldTitle} htmlFor="username">
                    Your name
                  </label>
                  <input
                    className={css.inputText}
                    id="username"
                    autoComplete="off"
                    {...register('username')}
                  />
                  {errors.username && <span>{errors.username.message}</span>}
                </div>
                <div className={css.baseInput}>
                  <label className={css.settingBoldTitle} htmlFor="email">
                    Email
                  </label>
                  <input
                    className={css.inputText}
                    id="email"
                    type="email"
                    autoComplete="off"
                    {...register('email')}
                  />
                  {errors.email && <span>{errors.email.message}</span>}
                </div>
              </div>
              <div className={css.dailyNormaBlock}>
                <h4 className={css.settingBoldTitle}>My daily norma</h4>
                <div className={css.toColumnsFormulas}>
                  <div>
                    <p className={css.ordinaryText}>For woman</p>
                    <p className={css.ordinaryTextGreen}>
                      V=(M*0,03) + (T*0,4)
                    </p>
                  </div>
                  <div>
                    <p className={css.ordinaryText}>For man</p>
                    <p className={css.ordinaryTextGreen}>
                      V=(M*0,04) + (T*0,6)
                    </p>
                  </div>
                </div>
                <div className={css.legendWrap}>
                  <p className={css.ordinaryText}>
                    * V is the volume of the water norm in liters per day, M is
                    your body weight, T is the time of active sports, or another
                    type of activity commensurate in terms of loads (in the
                    absence of these, you must set 0)
                  </p>
                </div>
                <div className={css.activeHours}>
                  <p>!</p>
                  <p className={css.ordinaryText}>Active time in hours</p>
                </div>
              </div>
            </div>

            <div>
              <div className={css.baseInput}>
                <label className={css.ordinaryText} htmlFor="weight">
                  Your weight in kilograms:
                </label>
                <input
                  className={css.inputText}
                  id="weight"
                  autoComplete="off"
                  {...register('weight')}
                />
                {errors.username && <span>{errors.username.message}</span>}
              </div>
              <div>
                <p className={css.ordinaryText}>
                  The required amount of water in liters per day:
                </p>
                <span className={css.ordinaryTextGreen}>1.8 L</span>
              </div>
              <div className={css.margingTop14}>
                <div className={css.baseInput}>
                  <label className={css.settingBoldTitle} htmlFor="waterNorma">
                    Write down how much water you will drink:
                  </label>
                  <input
                    className={css.inputText}
                    id="waterNorma"
                    autoComplete="off"
                    {...register('waterNorma')}
                  />
                  {errors.username && <span>{errors.username.message}</span>}
                </div>
              </div>
            </div>
          </div>
          <Button className={css.button} type="submit" onClick={onSubmit}>
            Save
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default UserSettingsForm;
