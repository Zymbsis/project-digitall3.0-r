import css from './WaterList.module.css';
import WaterItem from '../WaterItem/WaterItem';
import { useSelector } from 'react-redux';
import { selectDailyIntake } from '../../../redux/water/selectors';

const WaterList = () => {
  const { portions } = useSelector(selectDailyIntake);

  return (
    <div className={css.waterListWrap}>
      <ul className={css.waterList}>
        {Array.isArray(portions) &&
          portions.length !== 0 &&
          portions.map(portion => (
            <li key={portion._id}>
              <WaterItem item={portion} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WaterList;
