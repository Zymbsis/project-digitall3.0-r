import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from 'context';
import { updateUser } from '../../../redux/user/operations.js';
import { selectCurrentUser } from '../../../redux/user/selectors.js';
import { userSettingsFormSchema } from 'validationSchemas';
import { Button } from 'shared/index.js';
import UserSettingsFormAvatar from './UserSettingsFormAvatar.jsx';
import UserSettingsFormFirstColumn from './UserSettingsFormFirstColumn.jsx';
import UserSettingsFormSecondColumn from './UserSettingsFormSecondColumn.jsx';

import css from './UserSettingsForm.module.css';

const UserSettingsForm = () => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const usersDailyNorma = user.dailyNorma / 1000;
  const defaultValues = { ...user, dailyNorma: usersDailyNorma };
  delete defaultValues.createdAt;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSettingsFormSchema),
    mode: 'onSubmit',
    defaultValues,
  });

  const handleFieldChange = evt => {
    const { name, value } = evt.target;
    // console.log('name, value: ', name, value);
    clearErrors(name);
    if (name === 'dailyNorma') {
      const newValue = value.replace(',', '.');
      setValue(name, newValue);
      return;
    }
    if (['weight', 'activeHours', 'dailyNorma'].includes(name)) {
      if (isNaN(Number(value))) {
        setValue(name, 0);
        return;
      }
      setValue(name, Number(value));
      return;
    }
    setValue(name, value);
  };

  const onSubmit = (originalData, evt) => {
    const data = { ...originalData };
    delete data.avatar;
    data.dailyNorma = data.dailyNorma * 1000;
    // console.log('data to dispatch: ', data);
    dispatch(updateUser(data));

    //object FofmData for sending to backend (as insisted by the project task)
    // const formData = new FormData();
    // for (const key in data) {
    //   if (data.hasOwnProperty(key)) {
    //     formData.append(key, data[key]);
    //   }
    // }
    //to check if data in FormData object is correct
    // console.log('formData to dispatch: ', formData);
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value);
    // }
    closeModal(evt);
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
