import { useState } from 'react'; //temporary,  waiting for redux
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from 'shared/index.js';
import css from './UserSettingsForm.module.css';

import { yupValidationSchema } from './serviceUserSettingsForm.js';
import UserSettingsFormAvatar from './UserSettingsFormAvatar.jsx';
import UserSettingsFormFirstColumn from './UserSettingsFormFirstColumn.jsx';
import UserSettingsFormSecondColumn from './UserSettingsFormSecondColumn.jsx';

const getInitialUserData = () => {
  const userData = {
    username: 'Nadia',
    gender: 'female',
    email: 'nadia10@gmail.com',
    weight: 55,
    activeHours: 1,
    dailyNorma: 1.7,
    avatarFile: false,
  };
  return userData;
};

const UserSettingsForm = () => {
  const [userData, setUserData] = useState(getInitialUserData); //temporary,  waiting for redux
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupValidationSchema),
    defaultValues: {
      username: userData.username,
      gender: userData.gender,
      email: userData.email,
      weight: userData.weight,
      activeHours: userData.activeHours,
      dailyNorma: userData.dailyNorma,
      avatarFile: userData.avatarFile,
    },
  });

  const handleFieldChange = evt => {
    const { name, value } = evt.target;
    console.log('name, value: ', name, value);

    userData[name] = value;
    setUserData({ userData });
  };

  const onSubmit = data => {
    console.log('Form data: ', data);
  };

  return (
    <div className={css.modalSettingContent}>
      <h2 className={css.settingTitle}>Setting</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserSettingsFormAvatar
          register={register}
          errors={errors}
          userData={userData}
          setUserData={setUserData}
        />
        <div className={css.toColumns}>
          <UserSettingsFormFirstColumn
            register={register}
            errors={errors}
            handleFieldChange={handleFieldChange}
          />
          <UserSettingsFormSecondColumn
            register={register}
            errors={errors}
            userData={userData}
            handleFieldChange={handleFieldChange}
          />
        </div>
        <Button className={css.saveButton} type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default UserSettingsForm;
