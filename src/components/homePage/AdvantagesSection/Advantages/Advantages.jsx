import css from './Advantages.module.css';

const Advantages = () => {
  return (
    <div className={css.advantages}>
      <div className={css.habit}>
        <div className={css.dot}></div>
        <p className={css.habitText}>Habit drive</p>
      </div>
      <div className={css.statistics}>
        <p className={css.statisticsText}>View statistics</p>
      </div>
      <div className={css.rate}>
        <p className={css.rateText}>Personal rate setting</p>
      </div>
    </div>
  );
};

export default Advantages;
