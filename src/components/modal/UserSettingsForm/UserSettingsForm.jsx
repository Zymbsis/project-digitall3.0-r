import { useState } from 'react'; //temporary,  waiting for redux
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from 'shared/index.js';
import css from './UserSettingsForm.module.css';

import UserSettingsFormAvatar from './UserSettingsFormAvatar.jsx';
import UserSettingsFormFirstColumn from './UserSettingsFormFirstColumn.jsx';
import UserSettingsFormSecondColumn from './UserSettingsFormSecondColumn.jsx';
import { yupValidationSchema } from '../serviceUserSettingsForm.js';

const getInitialUserData = () => {
  const userData = {
    name: 'User',
    gender: 'woman',
    email: '',
    weight: 0,
    activeHours: 0,
    dailyNorma: 1500 / 1000, //norm = 1500 ml per day (but data in form is in liters)
    avatar: '',
    // avatar: 'https://i.pravatar.cc/300', //waiting for URL from redux
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
      name: userData.name,
      gender: userData.gender,
      email: userData.email,
      weight: userData.weight,
      activeHours: userData.activeHours,
      dailyNorma: userData.dailyNorma,
      avatar: userData.avatar,
    },
  });

  const handleFieldChange = evt => {
    const { name, value } = evt.target;
    // console.log('name, value: ', name, value);

    userData[name] = value;
    setUserData({ ...userData });
    // console.log('userData: ', userData);
  };

  const onSubmit = data => {
    // console.log('Form data: ', data);
    //this part emulates data for backend
    userData.name = data.name;
    userData.email = data.email;
    userData.weight = data.weight;
    userData.activeHours = data.activeHours;
    userData.dailyNorma = data.dailyNorma * 1000; //*1000 because data in form is in liters, bakend in ml

    //these two fields are hidden in form, so their values are already in userData
    // userData.gender = data.gender;
    // userData.avatar = data.avatar;

    console.log('userData for redux: ', userData);
    setUserData({ ...userData });

    //ogject FofmData for sending to backend (as insisted by the project task)
    const formData = new FormData();

    for (const key in userData) {
      if (userData.hasOwnProperty(key)) {
        console.log('key, value: ', key, userData[key]);
        formData.append(key, userData[key]);
      }
    }

    console.log('formData: ', formData);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <div className={css.modalSettingContent}>
      <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
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
