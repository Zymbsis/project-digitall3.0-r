import { useDispatch } from 'react-redux';
import { updateUser } from '../../../redux/user/operations.js';
import { Icon } from 'shared';

import css from './UserSettingsFormColumns.module.css';

const UserSettingsFormAvatar = ({ register, errors, setValue, watch }) => {
  const dispatch = useDispatch();
  const handleFileChange = evt => {
    const file = evt.target.files[0];

    if (file) {
      setValue('avatar', file);
      const formData = new FormData();
      formData.append('avatar', file);
      dispatch(updateUser(formData));
    }
  };

  const getSrcForAvatar = avatar => {
    if (typeof avatar === 'string' && avatar.length !== 0) {
      return avatar;
    } else if (typeof avatar === 'object' && avatar.length !== 0) {
      return URL.createObjectURL(avatar);
    }
    return '';
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
            accept="image/*"
            hidden
            {...register('avatar', { required: true })}
            onChange={handleFileChange}
          />
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
