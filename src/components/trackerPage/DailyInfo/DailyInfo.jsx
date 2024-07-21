import ChooseDate from '../ChooseDate/ChooseDate';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';
import css from './DailyInfo.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectSelectedDate } from '../../../redux/water/selectors';
import { parseDayForFetch } from '../../../helpers';


const DailyInfo = () => {
  const selectedDate = useSelector(selectSelectedDate);
  const currentDate = parseDayForFetch(new Date());
  return (
    <div className={(clsx(css.dailyInfoContainer), 'tour-daily-progress')}>
      <div className={css.wrapperTop}>
        <ChooseDate />
        {(selectedDate < currentDate || selectedDate === null) && (
          <AddWaterBtn className="dailyInfoStyles" />
        )}
      </div>
      <WaterList />
    </div>
  );
};

export default DailyInfo;
