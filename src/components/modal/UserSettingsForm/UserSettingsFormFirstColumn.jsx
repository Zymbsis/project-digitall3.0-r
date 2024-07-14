import { Icon } from 'shared/index.js';

import css from './UserSettingsForm.module.css';

const UserSettingsFormFirstColumn = ({
  register,
  errors,
  handleFieldChange,
}) => {
  return (
    <div>
      <div>
        <h4 className={css.settingBoldTitle}>Your gender identity</h4>
        <div className={css.genderRadioGroup}>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            autoComplete="off"
            hidden
            {...register('gender', { required: true })}
            onChange={handleFieldChange}
          />
          <label htmlFor="female" className={css.radioStyle}>
            Woman
          </label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            autoComplete="off"
            hidden
            {...register('gender', { required: true })}
            onChange={handleFieldChange}
          />
          <label htmlFor="male" className={css.radioStyle}>
            Man
          </label>
        </div>
      </div>
      <div className={css.dataBlock}>
        <div className={css.baseInput}>
          <label className={css.settingBoldTitle} htmlFor="username">
            Your name
          </label>
          <input
            className={css.inputText}
            id="username"
            autoComplete="off"
            {...register('username')}
          />
          {errors.username && (
            <span className={css.yupAlert}>{errors.username.message}</span>
          )}
        </div>
        <div className={css.baseInput}>
          <label className={css.settingBoldTitle} htmlFor="email">
            Email
          </label>
          <input
            className={css.inputText}
            id="email"
            type="email"
            autoComplete="off"
            {...register('email')}
          />
          {errors.email && (
            <span className={css.yupAlert}>{errors.email.message}</span>
          )}
        </div>
      </div>
      <div className={css.dataBlock}>
        <h4 className={css.settingBoldTitle}>My daily norma</h4>
        <div className={css.toColumnsFormulas}>
          <div>
            <p className={css.ordinaryText}>For woman</p>
            <p className={css.boldTextGreen}>V=(M*0,03) + (T*0,4)</p>
          </div>
          <div>
            <p className={css.ordinaryText}>For man</p>
            <p className={css.boldTextGreen}>V=(M*0,04) + (T*0,6)</p>
          </div>
        </div>
        <div className={css.legendWrap}>
          <p className={css.ordinaryText}>
            <span className={css.ordinaryTextGreen}>*</span> V is the volume of
            the water norm in liters per day, M is your body weight, T is the
            time of active sports, or another type of activity commensurate in
            terms of loads (in the absence of these, you must set 0)
          </p>
        </div>
        <div className={css.activeHours}>
          <Icon
            className={css.exclamationIcon}
            iconId="icon-exclamation-mark"
          />
          <p className={css.ordinaryText}>Active time in hours</p>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsFormFirstColumn;
