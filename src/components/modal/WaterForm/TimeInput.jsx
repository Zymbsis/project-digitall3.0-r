import css from './WaterForm.module.css';
const TimeInput = ({ time, setTime }) => {
  const handleChange = e => {
    setTime(e.target.value);
  };

  return (
    <>
      <label className={css.timeLabel}>
        Recording time:
        <input
          type="text"
          value={time}
          onChange={handleChange}
          className={css.timeInput}
        />
      </label>
    </>
  );
};

export default TimeInput;
