import styles from '../WaterModal/WaterIntakePopup.module.css';

const WaterInput = ({ value, setValue }) => {
  const handleChange = e => {
    Number(setValue(e.target.value));
  };

  return (
    <>
      <div className={styles.inputLabel}>
        Enter the value of the water used:
      </div>
      <input
        type="number"
        value={+value}
        onChange={handleChange}
        className={styles.waterInput}
      />
    </>
  );
};

export default WaterInput;
