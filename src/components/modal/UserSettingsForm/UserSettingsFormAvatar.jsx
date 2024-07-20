import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from '../../../redux/user/operations.js';
import { Icon } from 'shared/index.js';
import avatarDefault from './avatar_default.png';
import css from './UserSettingsFormColumns.module.css';
import toast from 'react-hot-toast';
import { selectError } from '../../../redux/user/selectors.js';

const UserSettingsFormAvatar = ({ register, errors, setValue, watch }) => {
  const currentError = useSelector(selectError);
  const dispatch = useDispatch();
  const handleFileChange = evt => {
    const file = evt.target.files[0];

    if (file) {
      setValue('avatar', file);
      const formData = new FormData();
      formData.append('avatar', file);
      // dispatch(updateUser(formData));
      toast.promise(dispatch(updateUser(formData)), {
        pending: 'Updating your avatar...',
        success: <b>Your avatar is successfully updated</b>,
        error: currentError.error,
      });
    }
  };

  const getSrcForAvatar = avatar => {
    if (typeof avatar === 'string' && avatar.length !== 0) {
      return avatar;
    } else if (typeof avatar === 'object' && avatar.length !== 0) {
      return URL.createObjectURL(avatar);
    }
    // return '/public/img/userSettingsForm/avatar_default.png';
    return avatarDefault;
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
