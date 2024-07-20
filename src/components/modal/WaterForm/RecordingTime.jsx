import styles from '../WaterModal/WaterIntakePopup.module.css';
const RecordingTime = ({ time, setTime }) => {
  const handleChange = e => {
    setTime(e.target.value);
  };

  return (
    <>
      <div className={styles.label}>Recording time:</div>
      <input
        type="text"
        value={time}
        onChange={handleChange}
        className={styles.timeInput}
      />
    </>
  );
};

export default RecordingTime;
