import ChooseDate from '../ChooseDate/ChooseDate';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';
import css from './DailyInfo.module.css';
import { useSelector } from 'react-redux';
import { selectSelectedDate } from '../../../redux/water/selectors';

const DailyInfo = () => {
  const selectedDate = useSelector(selectSelectedDate);

  return (
    <div className={css.dailyInfoContainer}>
      <div className={css.wrapperTop}>
        <ChooseDate />
        <AddWaterBtn className="dailyInfoStyles" date={selectedDate} />
      </div>
      <WaterList />
    </div>
  );
};

export default DailyInfo;
