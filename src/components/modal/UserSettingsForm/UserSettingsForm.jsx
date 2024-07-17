import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { selectCurrentUser } from '../../../redux/user/selectors.js';
import { getUser, updateUser } from '../../../redux/user/operations.js';
import { Button } from 'shared/index.js';
import css from './UserSettingsForm.module.css';

import UserSettingsFormAvatar from './UserSettingsFormAvatar.jsx';
import UserSettingsFormFirstColumn from './UserSettingsFormFirstColumn.jsx';
import UserSettingsFormSecondColumn from './UserSettingsFormSecondColumn.jsx';
import { yupValidationSchema } from '../serviceUserSettingsForm.js';

// import { useModal } from 'context/modalContext.js';

const UserSettingsForm = () => {
  // const { closeModal } = useModal();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupValidationSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: user.name,
      gender: user.gender,
      email: user.email,
      weight: user.weight,
      activeHours: user.activeHours,
      dailyNorma: user.dailyNorma ? user.dailyNorma / 1000 : 1500 / 1000, //norm = 1500 ml per day (but data in form is in liters)
      avatar: user.avatar,
      // avatar: 'https://i.pravatar.cc/300',
    },
  });

  // if user is empty, get her/him from backend
  if (!user.hasOwnProperty('email')) {
    // console.log('user is empty! go dispatch etUser()');
    dispatch(getUser());
    return;
  }

  // const testUset = watch();
  // console.log('testUset: ', testUset);

  // console.log('user in settings: ', user);

  const handleFieldChange = evt => {
    const { name, value } = evt.target;
    // console.log('name, value: ', name, value);
    if (name === 'dailyNorma') {
      const newValue = value.replace(',', '.');
      setValue(name, newValue);
      return;
    }
    if (['weight ', 'activeHours', 'dailyNorma'].includes(name)) {
      setValue(name, Number(value));
      return;
    }

    setValue(name, value);
  };

  const onSubmit = data => {
    delete data.avatar;
    data.dailyNorma = data.dailyNorma * 1000;

    console.log('Form data: ', data);

    //object FofmData for sending to backend (as insisted by the project task)
    const formData = new FormData();

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        // if (key === 'avatar') {
        //   continue;
        // }
        // console.log('key, value: ', key, data[key]);

        formData.append(key, data[key]);
      }
    }

    //to check if data in FormData object is correct
    // console.log('formData: ', formData);
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value);
    // }

    dispatch(updateUser(data));
    // dispatch(updateUser(formData));

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={handleKeyDown}
        noValidate
      >
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
