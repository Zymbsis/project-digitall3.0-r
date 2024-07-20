import { useState } from 'react';
import * as yup from 'yup';
import css from './WaterForm.module.css';
import { useSelector } from 'react-redux';
import { selectSelectedDate } from '../../../redux/water/selectors';
import { Button } from '../../../shared';
import WaterAmount from './WaterAmount';

// Define the validation schema
const schema = yup.object().shape({
  amount: yup.number().min(50).max(1000).required('Amount is required'),
  time: yup
    .string()
    .matches(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format')
    .required('Time is required'),
});

export const getTime = timeString => {
  const dateAndTime = new Date();
  const padZero = num => num.toString().padStart(2, '0');
  if (timeString) {
    const [hoursStr, minutesStr] = timeString.split(':');
    const hours = parseInt(hoursStr.slice(0, 2), 10);
    const minutes = parseInt(minutesStr.slice(0, 2), 10);
    if (!isNaN(hours) && hours >= 0 && hours < 24) {
      dateAndTime.setHours(hours);
    }
    if (!isNaN(minutes) && minutes >= 0 && minutes < 60) {
      dateAndTime.setMinutes(minutes);
    } else {
      dateAndTime.setMinutes(0);
    }
  }
  const currentHours = dateAndTime.getHours();
  const currentMinutes = dateAndTime.getMinutes();
  const time = `${currentHours}:${padZero(currentMinutes)}`;

  return time;
};

const WaterForm = ({ time, setTime, value, setValue, onClose }) => {
  const [errors, setErrors] = useState({});
  const selectedDate = useSelector(selectSelectedDate);
  const handleTimeChange = e => {
    let value = e.target.value;

    // Automatically add colon after two digits
    if (value.length === 2 && !value.includes(':') && !time.includes(':')) {
      value = value + ':';
    }

    // Allow deletion
    if (time.length === 3 && value.length === 2) {
      value = value.slice(0, -1);
    }

    setTime(value);
  };

  const onSubmit = async evt => {
    evt.preventDefault();

    const form = evt.target;
    const amount = form.amount.value;
    const time = form.time.value;

    try {
      // Validate the form data against the schema
      await schema.validate({ amount, time }, { abortEarly: false });

      // If validation passes, set the values and close the form
      console.log({ amount, time });
      setValue(amount);
      setTime(time);

      // Additional logic here, like making API calls or updating the state
      onClose();
    } catch (err) {
      // If validation fails, set the errors
      const validationErrors = {};
      err.inner.forEach(error => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };
  const [waterAmount, setWaterAmount] = useState(50);

  const [recordingTime, setRecordingTime] = useState(getTime());

  const handleIncrease = () => {
    if (waterAmount === 1000) return;
    setWaterAmount(waterAmount + 50);
  };
  const handleDecrease = () => {
    if (waterAmount === 50) return;
    setWaterAmount(waterAmount - 50);
  };

  return (
    <>
      <WaterAmount
        amount={waterAmount}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
      <form onSubmit={onSubmit} className={css.form}>
        <label className={css.timeLabel}>
          Recording time:
          <input
            className={css.timeInput}
            type="text"
            name="time"
            value={time}
            onChange={handleTimeChange}
            placeholder="HH:MM"
          />
        </label>
        {errors.time && <p className={css.error}>{errors.time}</p>}

        <label className={css.waterLabel}>
          Enter the value of the water used:
          <input
            className={css.waterInput}
            type="number"
            name="amount"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </label>
        {errors.amount && <p className={css.error}>{errors.amount}</p>}

        <Button
          disabled={!time || !value}
          className={css.saveButton}
          type="submit"
        >
          Save
        </Button>
      </form>
    </>
  );
};

export default WaterForm;
