import css from './AdvantageList.module.css';

const AdvantageList = () => {
  return (
    <ul className={css.advantageList}>
      <li className={css.advantageItem}>
        <p>Habit drive</p>
      </li>
      <li className={css.advantageItem}>
        <p>View statistics</p>
      </li>
      <li className={css.advantageItem}>
        <p>Personal rate setting</p>
      </li>
    </ul>
  );
};

export default AdvantageList;
