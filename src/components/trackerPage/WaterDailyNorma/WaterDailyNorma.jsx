import { useSelector } from 'react-redux';
import css from './WaterDailyNorma.module.css';
import { selectCurrentUser } from '../../../redux/user/selectors';

const WaterDailyNorma = () => {
  const { dailyNorma } = useSelector(selectCurrentUser);
  const dayNorma = dailyNorma ? Math.round((dailyNorma / 1000) * 100) / 100 : 0;

  return (
    <div className={css.thumb}>
      <p className={css.boldText}> {dayNorma} L </p>
      <p className={css.normalText}> My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
