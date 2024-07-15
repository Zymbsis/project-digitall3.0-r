import { Icon } from 'shared/index.js';

import avatarDefault from '../../../icons/avatar_default.png';

import css from './UserSettingsForm.module.css';

const UserSettingsFormAvatar = ({ register, errors, setValue, watch }) => {
  const handleFileChange = evt => {
    const file = evt.target.files[0];

    if (file) {
      setValue('avatar', file);
    }
  };

  const getSrcForAvatar = avatar => {
    if (typeof avatar === 'string') {
      if (avatar === '') {
        return avatarDefault;
      }
      return avatar;
    } else {
      return URL.createObjectURL(avatar);
    }
  };

  return (
    <div className={css.avatarArea}>
      <div className={css.avatarThumb}>
        <img
          className={css.avatar}
          src={getSrcForAvatar(watch('avatar'))}
          alt="User avatar"
        />
        <div>
          <input
            id="avatar"
            name="avatar"
            type="file"
            hidden
            accept=".jpg,.jpeg,.png,.gif"
            {...register('avatar', { required: true })}
            onChange={handleFileChange}
          />
          {errors.avatar && <span>Avatar image file is required</span>}
        </div>
        <label htmlFor="avatar" className={css.uploadButton}>
          {<Icon className={css.uploadIcon} iconId="icon-upload" />}Upload a
          photo
        </label>
      </div>
    </div>
  );
};

export default UserSettingsFormAvatar;
