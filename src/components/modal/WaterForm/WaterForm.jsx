import { useState } from 'react';
import * as yup from 'yup';
import css from './WaterForm.module.css';

import { Button } from '../../../shared';
import WaterAmount from './WaterAmount';
import { useForm } from 'react-hook-form';
import { getCurrentTime, parseDayForFetch } from '../../../helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import {
  addWaterIntake,
  updateWaterIntake,
} from '../../../redux/water/operations';
import { useModal } from '../../../context';

const waterModalSchema = yup
  .object({
    timeInput: yup
      .string()
      .min(5)
      .max(5)
      .matches(
        /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,
        'Invalid time format. Must be "HH:MM"'
      )
      .required('Time is required'),
    waterInput: yup
      .number('must be a number')
      .min(50)
      .max(1000)
      .required('amount is required'),
  })
  .required();

// export const getTime = timeString => {
//   const dateAndTime = new Date();
//   const padZero = num => num.toString().padStart(2, '0');
//   if (timeString) {
//     const [hoursStr, minutesStr] = timeString.split(':');
//     const hours = parseInt(hoursStr.slice(0, 2), 10);
//     const minutes = parseInt(minutesStr.slice(0, 2), 10);
//     if (!isNaN(hours) && hours >= 0 && hours < 24) {
//       dateAndTime.setHours(hours);
//     }
//     if (!isNaN(minutes) && minutes >= 0 && minutes < 60) {
//       dateAndTime.setMinutes(minutes);
//     } else {
//       dateAndTime.setMinutes(0);
//     }
//   }
//   const currentHours = dateAndTime.getHours();
//   const currentMinutes = dateAndTime.getMinutes();
//   const time = `${currentHours}:${padZero(currentMinutes)}`;

//   return time;
// };

const WaterForm = ({ type, id, date }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const currentTime = getCurrentTime(new Date());
  const currentDate = parseDayForFetch(new Date());

  const [waterAmount, setWaterAmount] = useState(50);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(waterModalSchema),
    defaultValues: {
      timeInput: currentTime,
      waterInput: 50,
    },
  });

  const onSubmit = (data, e) => {
    if (type === 'add') {
      const payload = {
        date: date ? date : currentDate,
        time: data.timeInput,
        volume: data.waterInput,
      };
      dispatch(addWaterIntake(payload));
    }
    if (type === 'edit') {
      const payload = {
        _id: id,
        time: data.timeInput,
        volume: data.waterInput,
      };
      dispatch(updateWaterIntake(payload));
    }
    closeModal(e);
  };

  const handleIncrease = () => {
    if (+waterAmount >= 1000) return;
    setWaterAmount(+waterAmount + 50);
  };

  const handleDecrease = () => {
    if (+waterAmount === 50) return;
    setWaterAmount(+waterAmount - 50);
  };

  const handleWaterInputChange = e => {
    if (e.target.value.match(/^\d+$/) || e.target.value === '') {
      setWaterAmount(e.target.value);
    }
    if (+e.target.value > 1000) {
      setWaterAmount(1000);
    }
  };

  return (
    <>
      <WaterAmount
        amount={waterAmount}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <label className={css.timeLabel}>
          Recording time:
          <input
            className={css.timeInput}
            {...register('timeInput')}
            maxLength={5}
          />
        </label>
        <p>{errors.timeInput?.message}</p>

        <label className={css.waterLabel}>
          Enter the value of the water used:
          <input
            className={css.waterInput}
            {...register('waterInput')}
            onChange={handleWaterInputChange}
            value={waterAmount}
            maxLength={4}
          />
        </label>
        <p>{errors.waterInput?.message}</p>

        <Button className={css.saveButton} type="submit">
          Save
        </Button>
      </form>
    </>
  );
};

export default WaterForm;
