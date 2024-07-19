import { useState } from "react";
import styles from "./WaterIntakePopup.module.css";
import Header from "./Header";
import WaterAmount from "./WaterAmount";
import WaterForm from "../WaterForm/WaterForm";

export const getTime = (timeString) => {
  const dateAndTime = new Date();
  const padZero = (num) => num.toString().padStart(2, "0");

  if (timeString) {
    const [hoursStr, minutesStr] = timeString.split(":");
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

const WaterModal = ({ type = "Add" }) => {
  const [waterAmount, setWaterAmount] = useState(50);
  const [recordingTime, setRecordingTime] = useState(getTime());

  const decrease = () => setWaterAmount((prev) => Math.max(0, prev - 50));
  const increase = () =>
    setWaterAmount((prev) => (prev > 950 ? 1000 : +prev + 50));

  let title = type === "Add" ? "Add water" : "Edit the entered amount of water";
  let popupType = type === "Add" ? "Choose a value" : "Correct entered data:";

  const onClose = () => {
    const popup = document.querySelector("#popup");
    popup.style.display = "none";
    popup.style.opacity = "0";
    popup.style.pointerEvents = "none";
  };

  return (
    <div id="popup" className={styles.popup}>
      <Header onClose={onClose} title={title} />
      <div className={styles.correctData}>{popupType}</div>
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
