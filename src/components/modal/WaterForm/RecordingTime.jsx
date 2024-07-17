import styles from "../WaterModal/WaterIntakePopup.module.css";
const RecordingTime = ({ time, setTime }) => (
  <>
    <div className={styles.label}>Recording time:</div>
    <input
      type="text"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      className={styles.timeInput}
    />
  </>
);

export default RecordingTime;
