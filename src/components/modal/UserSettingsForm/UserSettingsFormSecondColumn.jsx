import clsx from 'clsx';
import css from './UserSettingsFormColumns.module.css';

const countNorma = userData => {
  const { gender, weight, activeHours } = userData;

  if (weight > 150 || activeHours > 12) return '-';

  if (gender === 'male') {
    return Math.round((weight * 0.04 + activeHours * 0.6) * 10) / 10;
  }
  return Math.round((weight * 0.03 + activeHours * 0.4) * 10) / 10;
};

const UserSettingsFormSecondColumn = ({
  register,
  errors,
  watch,
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
            className={clsx(
              css.inputText,
              errors.weight ? css.yupAlertBorder : css.baseBorder
            )}
            type="text"
            maxLength="3"
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
            className={clsx(
              css.inputText,
              errors.activeHours ? css.yupAlertBorder : css.baseBorder
            )}
            type="text"
            maxLength="2"
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
            type="text"
            maxLength={4}
            id="dailyNorma"
            autoComplete="off"
            {...register('dailyNorma')}
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
