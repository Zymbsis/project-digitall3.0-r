import { useState } from 'react';
import WaterAmount from './WaterAmount';
import WaterForm from '../WaterForm/WaterForm';
import { Title } from 'shared';
import css from './WaterModal.module.css';

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

const WaterModal = ({ type = 'add' }) => {
  const [waterAmount, setWaterAmount] = useState(50);
  const [recordingTime, setRecordingTime] = useState(getTime());

  const decrease = () => setWaterAmount(prev => Math.max(0, prev - 50));
  const increase = () =>
    setWaterAmount(prev => (prev > 950 ? 1000 : +prev + 50));

  let title = type === 'add' ? 'Add water' : 'Edit the entered amount of water';
  let popupType = type === 'add' ? 'Choose a value' : 'Correct entered data:';

  const onClose = () => {
    const popup = document.querySelector('#popup');
    popup.style.display = 'none';
    popup.style.opacity = '0';
    popup.style.pointerEvents = 'none';
  };

  return (
    <div className={css.wrapper}>
      <Title>{title}</Title>
      <p className={css.correctData}>{popupType}</p>
      <WaterAmount
        amount={waterAmount}
        setAmount={setWaterAmount}
        decrease={decrease}
        increase={increase}
      />
      <WaterForm
        onClose={onClose}
        time={recordingTime}
        setTime={setRecordingTime}
        value={waterAmount}
        setValue={setWaterAmount}
      />
    </div>
  );
};

export default WaterModal;
