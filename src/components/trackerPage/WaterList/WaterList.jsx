

import css from './WaterList.module.css';
import WaterItem from '../WaterItem/WaterItem';

const WaterList = () => {
  return (
    <div className={css.waterListWrap}>
      <ul className={css.waterList}>
        <li className={css.waterItem}>
          <WaterItem />
        </li>
        <li className={css.waterItem}>
          <WaterItem />
        </li>
        <li className={css.waterItem}>
          <WaterItem />
        </li>
      </ul>
    </div>
  );
};

export default WaterList;
