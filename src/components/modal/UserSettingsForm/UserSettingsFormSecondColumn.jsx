import clsx from 'clsx';
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
  watch,
  handleFieldChange,
  clearErrors,
}) => {
  return (
    <div className={css.columnTwo}>
      <div className={css.dataBlock}>
        <div className={css.baseInput}>
          <label className={css.ordinaryText} htmlFor="weight">
            Your weight in kilograms:
          </label>
          <input
            className={clsx(
              css.inputText,
              errors.weight ? css.yupAlertBorder : css.baseBorder
            )}
            // type="number"
            type="text"
            maxLength="3"
            id="weight"
            autoComplete="off"
            {...register('weight')}
            // onFocus={() => clearErrors('weight')}
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
            className={clsx(
              css.inputText,
              errors.activeHours ? css.yupAlertBorder : css.baseBorder
            )}
            // type="number"
            type="text"
            maxLength={2}
            id="activeHours"
            // step="1"
            // min="0"
            // max="12"
            autoComplete="off"
            {...register('activeHours')}
            onFocus={() => clearErrors('activeHours')}
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
          <span className={css.ordinaryTextGreen}>{countNorma(watch())} L</span>
        </div>
        <div className={css.baseInput}>
          <label className={css.settingBoldTitle} htmlFor="dailyNorma">
            Write down how much water you will drink:
          </label>
          <input
            className={clsx(
              css.inputText,
              errors.dailyNorma ? css.yupAlertBorder : css.baseBorder
            )}
            // type="number"
            type="text"
            maxLength={4}
            id="dailyNorma"
            // step="0.1"
            // min="0"
            // max="10"
            autoComplete="off"
            {...register('dailyNorma')}
            onFocus={() => clearErrors('dailyNorma')}
            onChange={handleFieldChange}
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
