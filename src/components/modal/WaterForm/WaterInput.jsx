import css from './WaterForm.module.css';

const WaterInput = ({ value, setValue }) => {
  const handleChange = e => {
    Number(setValue(e.target.value));
  };

  return (
    <>
      <label className={css.waterLabel}>
        Enter the value of the water used:
        <input
          type="number"
          value={+value}
          onChange={handleChange}
          className={css.waterInput}
        />
      </label>
    </>
  );
};

export default WaterInput;
