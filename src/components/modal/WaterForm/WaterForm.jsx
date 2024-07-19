import { useState } from "react";
import * as yup from "yup";
import styles from "../WaterModal/WaterIntakePopup.module.css";

// Define the validation schema
const schema = yup.object().shape({
  amount: yup.number().min(1).max(5000).required("Amount is required"),
  time: yup
    .string()
    .matches(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format")
    .required("Time is required"),
});

const WaterForm = ({ time, setTime, value, setValue, onClose }) => {
  const [errors, setErrors] = useState({});

  const handleTimeChange = (e) => {
    let value = e.target.value;

    // Automatically add colon after two digits
    if (value.length === 2 && !value.includes(":") && !time.includes(":")) {
      value = value + ":";
    }

    // Allow deletion
    if (time.length === 3 && value.length === 2) {
      value = value.slice(0, -1);
    }

    setTime(value);
  };

  const onSubmit = async (evt) => {
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
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.label}>Recording time:</div>
      <input
        type="text"
        name="time"
        value={time}
        onChange={handleTimeChange}
        placeholder="HH:MM"
        className={styles.timeInput}
      />
      {errors.time && <p className={styles.error}>{errors.time}</p>}

      <div className={styles.inputLabel}>
        Enter the value of the water used:
      </div>
      <input
        type="number"
        name="amount"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.waterInput}
      />
      {errors.amount && <p className={styles.error}>{errors.amount}</p>}

      <button
        disabled={!time || !value}
        className={styles.saveButton}
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default WaterForm;
