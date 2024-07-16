import { useSelector } from 'react-redux';
import css from './WaterDailyNorma.module.css';
import { selectCurrentUser } from '../../../redux/user/selectors';

const WaterDailyNorma = () => {
  const { dailyNorma } = useSelector(selectCurrentUser);
  const dayNorma = Math.round((dailyNorma / 1000) * 100) / 100;
  // Не скорочуй вираз) Ми множимо на 100, а потім ділимо на 100, щоб округлити до двох знаків після коми)
  return (
    <div className={css.thumb}>
      <p className={css.boldtext}> {dayNorma} L </p>
      <p className={css.normaltext}> My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
