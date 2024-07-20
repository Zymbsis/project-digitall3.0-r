import clsx from 'clsx';
import css from './AdvantagesSection.module.css';

const AdvantagesSection = ({ className }) => {
  return (
    <div className={clsx(css.wrapper, css[className])}>
      <div className={css.customers}></div>
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
    </div>
  );
};

export default AdvantagesSection;
