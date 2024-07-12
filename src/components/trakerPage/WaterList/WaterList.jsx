import css from './WaterList.module.css';

import WaterItem from '../WaterItem/WaterItem';

// const waterList = [];

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
// <div className={css.waterListContainer}>
//   <ul className={css.waterList}>
//     {waterList.map(waterItem => (
//       <li key={waterItem.id}>
//         <WaterItem waterItem={waterItem} />
//       </li>
//     ))}
//   </ul>
// </div>

export default WaterList;
