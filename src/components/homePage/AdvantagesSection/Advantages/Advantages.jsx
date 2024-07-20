import css from './Advantages.module.css';

const Advantages = () => {
  return (
    <ul className={css.advantages}>
      <li className={css.habit}>
        <div className={css.dot}></div>
        <p className={css.habitText}>Habit drive</p>
      </li>
      <li className={css.statistics}>
        <p className={css.statisticsText}>View statistics</p>
      </li>
      <li className={css.rate}>
        <p className={css.rateText}>Personal rate setting</p>
      </li>
    </ul>
  );
};

export default Advantages;
