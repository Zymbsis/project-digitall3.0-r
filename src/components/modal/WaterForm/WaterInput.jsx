import styles from "../WaterModal/WaterIntakePopup.module.css";

const WaterInput = ({ value, setValue }) => (
  <>
    <div className={styles.inputLabel}>Enter the value of the water used:</div>
    <input
      type="number"
      value={+value}
      onChange={(e) => Number(setValue(e.target.value))}
      className={styles.waterInput}
    />
  </>
);

export default WaterInput;
