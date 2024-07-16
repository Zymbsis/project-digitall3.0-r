import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from 'shared/index.js';
import css from './UserSettingsForm.module.css';

import UserSettingsFormAvatar from './UserSettingsFormAvatar.jsx';
import UserSettingsFormFirstColumn from './UserSettingsFormFirstColumn.jsx';
import UserSettingsFormSecondColumn from './UserSettingsFormSecondColumn.jsx';
import { yupValidationSchema } from '../serviceUserSettingsForm.js';
// import { useModal } from 'context/modalContext.js';

const UserSettingsForm = () => {
  // const { closeModal } = useModal();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupValidationSchema),
    defaultValues: {
      name: 'User',
      gender: 'woman',
      email: '',
      weight: 0,
      activeHours: 0,
      dailyNorma: 1500 / 1000, //norm = 1500 ml per day (but data in form is in liters)
      avatar: '',
      // avatar: 'https://i.pravatar.cc/300', //waiting for URL from redux
    },
  });

  const handleFieldChange = evt => {
    const { name, value } = evt.target;
    // console.log('name, value: ', name, value);
    setValue(name, value);
  };

  const onSubmit = data => {
    console.log('Form data: ', data);

    //object FofmData for sending to backend (as insisted by the project task)
    // const formData = new FormData();

    // for (const key in userData) {
    //   if (data.hasOwnProperty(key)) {
    //     console.log('key, value: ', key, data[key]);
    //     formData.append(key, data[key]);
    //   }
    // }

    //to check if data in FormData object is correct
    // console.log('formData: ', formData);
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value);
    // }

    //close modal

    // closeModal();
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
          setValue={setValue}
          watch={watch}
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
            watch={watch}
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
