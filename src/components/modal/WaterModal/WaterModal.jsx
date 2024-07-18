import { useState } from 'react';
import css from './WaterIntakePopup.module.css';
import WaterAmount from './WaterAmount';
import WaterForm from '../WaterForm/WaterForm';
import { Title } from '../../../shared';

export const getTime = timeString => {
  const dateAndTime = new Date();

  const padZero = num => num.toString().padStart(2, '0');

  if (timeString) {
    // Ensure that we only take the first two digits for hours and minutes
    const [hoursStr, minutesStr] = timeString.split(':');
    const hours = parseInt(hoursStr.slice(0, 2), 10);
    const minutes = parseInt(minutesStr.slice(0, 2), 10);

    // Validate and set hours if provided and valid
    if (!isNaN(hours) && hours >= 0 && hours < 24) {
      dateAndTime.setHours(hours);
    }

    // Validate and set minutes if provided and valid
    if (!isNaN(minutes) && minutes >= 0 && minutes < 60) {
      dateAndTime.setMinutes(minutes);
    } else {
      dateAndTime.setMinutes(0); // Default to 0 if minutes are invalid
    }
  }

  const currentHours = dateAndTime.getHours();
  const currentMinutes = dateAndTime.getMinutes();
  const time = `${currentHours}:${padZero(currentMinutes)}`;

  return time;
};
const WaterModal = ({ type = 'add' }) => {
  const [waterAmount, setWaterAmount] = useState(250);
  const [recordingTime, setRecordingTime] = useState(getTime());

  const decrease = () => setWaterAmount(prev => Math.max(0, prev - 50));
  const increase = () => setWaterAmount(prev => +prev + 50);

  let title = type === 'add' ? 'Add water' : 'Edit the entered amount of water';
  let popupType = type === 'add' ? 'Choose a value' : 'Correct entered data:';

  return (
    <div id="popup" className={css.wrapper}>
      <Title>{title}</Title>
      <div className={css.correctData}>{popupType}</div>
      <WaterAmount
        amount={waterAmount}
        setAmount={setWaterAmount}
        decrease={decrease}
        increase={increase}
      />
      <WaterForm
        time={recordingTime}
        setTime={setRecordingTime}
        value={waterAmount}
        setValue={setWaterAmount}
      />
    </div>
  );
};

export default WaterModal;
