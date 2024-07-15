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
      userData.avatar = file;
      setUserData({ ...userData });
    }
  };

  const getSrcForAvatar = avatar => {
    console.log('avatar: ', avatar);
    console.log('type of avatar: ', typeof avatar);
    if (typeof avatar === 'string') {
      if (avatar === '') {
        return avatarDefault;
      }
      return avatar;
    } else {
      return URL.createObjectURL(avatar);
    }
    // https://i.pravatar.cc/300
    // if (avatar) {
    //   return URL.createObjectURL(avatar);
    // }
  };

  return (
    <div className={css.avatarArea}>
      <div className={css.avatarThumb}>
        <img
          className={css.avatar}
          src={getSrcForAvatar(userData.avatar)}
          // src={
          //   userData.avatar
          //     ? URL.createObjectURL(userData.avatar)
          //     : avatarDefault
          // }
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
