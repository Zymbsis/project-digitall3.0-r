import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Icon } from 'shared/index.js';
import css from './UserSettingsForm.module.css';
import { useState } from 'react';

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
  weight: yup.number().max(150, 'Are you shure this is correct weight?'),
  activeHours: yup.number().max(9, 'Must not be more then 9 hours'),
  dailyNorma: yup.number().max(15, 'Must not be more then 15 liters'),
});

const UserSettingsForm = () => {
  const [avatarFile, setAvatarFile] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupValidationSchema),
    defaultValues: {
      username: 'Nadia',
      gender: 'female',
      email: 'nadia10@gmail.com',
      weight: 51,
      activeHours: 2,
      dailyNorma: 1.7,
    },
  });

  const onSubmit = data => {
    console.log('Form data: ', data);
    if (data.file.length > 0) {
      setAvatarFile(data.file[0]);
    }
  };

  const handleFileChange = event => {
    const file = event.target.files[0];

    if (file) {
      setAvatarFile(file);
    }
  };

  return (
    <div className={css.modalSettingContent}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={css.settingTitle}>Setting</h2>
        <div className={css.avatarArea}>
          <div className={css.avatarThumb}>
            <img
              className={css.avatar}
              src={avatarFile ? URL.createObjectURL(avatarFile) : ''}
              alt="avatar"
            />
            <div className={css.fileUploadWrapper}>
              <input
                className={css.fileInput}
                id="file"
                type="file"
                accept=".jpg,.jpeg,.png,.gif"
                {...register('file', { required: true })}
                onChange={handleFileChange}
              />
              {errors.file && <span>This field is required</span>}
            </div>
            <label htmlFor="file" className={css.uploadButton}>
              {<Icon className={css.uploadIcon} iconId="icon-upload" />}Upload a
              photo
            </label>
          </div>
        </div>

        <div className={css.toColumns}>
          <div>
            <div>
              <h4 className={css.settingBoldTitle}>Your gender identity</h4>
              <div className={css.genderRadioGroup}>
                <input
                  type="radio"
                  id="female"
                  name="genderGroup"
                  value="female"
                  autoComplete="off"
                  // defaultChecked
                  hidden
                  {...register('gender', { required: true })}
                />
                <label htmlFor="female" className={css.radioStyle}>
                  Woman
                </label>
                <input
                  type="radio"
                  id="male"
                  name="genderGroup"
                  value="male"
                  autoComplete="off"
                  hidden
                  {...register('gender', { required: true })}
                />
                <label htmlFor="male" className={css.radioStyle}>
                  Man
                </label>
              </div>
            </div>
            <div className={css.dataBlock}>
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
                {errors.username && (
                  <span className={css.yupAlert}>
                    {errors.username.message}
                  </span>
                )}
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
                {errors.email && (
                  <span className={css.yupAlert}>{errors.email.message}</span>
                )}
              </div>
            </div>
            <div className={css.dataBlock}>
              <h4 className={css.settingBoldTitle}>My daily norma</h4>
              <div className={css.toColumnsFormulas}>
                <div>
                  <p className={css.ordinaryText}>For woman</p>
                  <p className={css.boldTextGreen}>V=(M*0,03) + (T*0,4)</p>
                </div>
                <div>
                  <p className={css.ordinaryText}>For man</p>
                  <p className={css.boldTextGreen}>V=(M*0,04) + (T*0,6)</p>
                </div>
              </div>
              <div className={css.legendWrap}>
                <p className={css.ordinaryText}>
                  <span className={css.ordinaryTextGreen}>*</span> V is the
                  volume of the water norm in liters per day, M is your body
                  weight, T is the time of active sports, or another type of
                  activity commensurate in terms of loads (in the absence of
                  these, you must set 0)
                </p>
              </div>
              <div className={css.activeHours}>
                <Icon
                  className={css.exclamationIcon}
                  iconId="icon-exclamation-mark"
                />
                <p className={css.ordinaryText}>Active time in hours</p>
              </div>
            </div>
          </div>

          <div className={css.columnTwo}>
            <div className={css.dataBlock}>
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
                {errors.weight && (
                  <span className={css.yupAlert}>{errors.weight.message}</span>
                )}
              </div>
              <div className={css.baseInput}>
                <label className={css.ordinaryText} htmlFor="activeHours">
                  The time of active participation in sports:
                </label>
                <input
                  className={css.inputText}
                  id="activeHours"
                  autoComplete="off"
                  {...register('activeHours')}
                />
                {errors.activeHours && (
                  <span className={css.yupAlert}>
                    {errors.activeHours.message}
                  </span>
                )}
              </div>
            </div>
            <div className={css.dataBlock}>
              <div className={css.reqWaterColumns}>
                <p className={css.ordinaryText}>
                  The required amount of water in liters per day: &nbsp;
                </p>
                <span className={css.ordinaryTextGreen}> 1.8 L</span>
              </div>
              <div className={css.baseInput}>
                <label className={css.settingBoldTitle} htmlFor="dailyNorma">
                  Write down how much water you will drink:
                </label>
                <input
                  className={css.inputText}
                  id="dailyNorma"
                  autoComplete="off"
                  {...register('dailyNorma')}
                />
                {errors.dailyNorma && (
                  <span className={css.yupAlert}>
                    {errors.dailyNorma.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <Button className={css.saveButton} type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default UserSettingsForm;
