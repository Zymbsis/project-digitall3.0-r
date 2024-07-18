import { useState } from 'react';
import styles from './WaterIntakePopup.module.css';
import Header from './Header';
import WaterAmount from './WaterAmount';
import WaterForm from '../WaterForm/WaterForm';

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
const WaterModal = ({ type = 'Add' }) => {
  const [waterAmount, setWaterAmount] = useState(250);
  const [recordingTime, setRecordingTime] = useState(getTime());

  const decrease = () => setWaterAmount(prev => Math.max(0, prev - 50));
  const increase = () => setWaterAmount(prev => +prev + 50);

  let title = type === 'Add' ? 'Add water' : 'Edit the entered amount of water';
  let popupType = type === 'Add' ? 'Choose a value' : 'Correct entered data:';

  return (
    <div id="popup" className={styles.popup}>
      <Header title={title} />
      <div className={styles.correctData}>{popupType}</div>
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
