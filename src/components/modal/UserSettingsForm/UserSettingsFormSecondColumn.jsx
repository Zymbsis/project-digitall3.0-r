import css from './UserSettingsForm.module.css';

const countNorma = userData => {
  if (userData.gender === 'male') {
    return (
      Math.round((userData.weight * 0.04 + userData.activeHours * 0.6) * 10) /
      10
    );
  }
  return (
    Math.round((userData.weight * 0.03 + userData.activeHours * 0.4) * 10) / 10
  );
};

const UserSettingsFormSecondColumn = ({
  register,
  errors,
  userData,
  handleFieldChange,
}) => {
  return (
    <div className={css.columnTwo}>
      <div className={css.dataBlock}>
        <div className={css.baseInput}>
          <label className={css.ordinaryText} htmlFor="weight">
            Your weight in kilograms:
          </label>
          <input
            className={css.inputText}
            id="weight"
            autoComplete="off"
            {...register('weight')}
            onChange={handleFieldChange}
          />
          {errors.weight && (
            <span className={css.yupAlert}>{errors.weight.message}</span>
          )}
        </div>
        <div className={css.baseInput}>
          <label className={css.ordinaryText} htmlFor="activeHours">
            The time of active participation in sports:
          </label>
          <input
            className={css.inputText}
            id="activeHours"
            autoComplete="off"
            {...register('activeHours')}
            onChange={handleFieldChange}
          />
          {errors.activeHours && (
            <span className={css.yupAlert}>{errors.activeHours.message}</span>
          )}
        </div>
      </div>
      <div className={css.dataBlock}>
        <div className={css.reqWaterColumns}>
          <p className={css.ordinaryText}>
            The required amount of water in liters per day: &nbsp;
          </p>
          <span className={css.ordinaryTextGreen}>
            {countNorma(userData)} L
          </span>
        </div>
        <div className={css.baseInput}>
          <label className={css.settingBoldTitle} htmlFor="dailyNorma">
            Write down how much water you will drink:
          </label>
          <input
            className={css.inputText}
            id="dailyNorma"
            autoComplete="off"
            {...register('dailyNorma')}
          />
          {errors.dailyNorma && (
            <span className={css.yupAlert}>{errors.dailyNorma.message}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSettingsFormSecondColumn;