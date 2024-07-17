import styles from "./WaterIntakePopup.module.css";

const WaterAmount = ({ amount, setAmount, decrease, increase }) => {
  return (
    <>
      <div className={styles.label}>Amount of water:</div>
      <div className={styles.amountControl}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d85fa297711f867f0e010e82bb34b232df531bd7f213baaf6d4f825ff60a62a?apiKey=6ca973d5a2ad4e4094edfc4eea487097&"
          className={styles.controlIcon}
          onClick={decrease}
          alt="Decrease"
        />
        <div className={styles.amount}>{amount} ml</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dd1945f9b996e8bb3a210e4c74f76cef91ea84e230045d4c1cd94772b5cfe6e?apiKey=6ca973d5a2ad4e4094edfc4eea487097&"
          className={styles.controlIcon}
          onClick={increase}
          alt="Increase"
        />
      </div>
    </>
  );
};

export default WaterAmount;
