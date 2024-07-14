import { Icon } from 'shared/index.js';

import avatarDefault from '../../../icons/avatar_default.png';

import css from './UserSettingsForm.module.css';

const UserSettingsFormAvatar = ({
  register,
  errors,
  userData,
  setUserData,
}) => {
  const handleFileChange = evt => {
    const file = evt.target.files[0];

    if (file) {
      userData.avatarFile = file;
      setUserData({ ...userData });
    }
  };

  return (
    <div className={css.avatarArea}>
      <div className={css.avatarThumb}>
        <img
          className={css.avatar}
          src={
            userData.avatarFile
              ? URL.createObjectURL(userData.avatarFile)
              : avatarDefault
          }
          alt="avatar"
        />
        <div className={css.fileUploadWrapper}>
          <input
            id="avatarFile"
            name="avatarFile"
            type="file"
            hidden
            accept=".jpg,.jpeg,.png,.gif"
            {...register('avatarFile', { required: true })}
            onChange={handleFileChange}
          />
          {errors.avatarFile && <span>This field is required</span>}
        </div>
        <label htmlFor="avatarFile" className={css.uploadButton}>
          {<Icon className={css.uploadIcon} iconId="icon-upload" />}Upload a
          photo
        </label>
      </div>
    </div>
  );
};

export default UserSettingsFormAvatar;
