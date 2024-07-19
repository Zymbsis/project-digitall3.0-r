import ChooseDate from '../ChooseDate/ChooseDate';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';
import css from './DailyInfo.module.css';
import clsx from 'clsx';

const DailyInfo = () => {
  return (
    <div className={clsx(css.dailyInfoContainer, 'tour-daily-progress')}>
      <div className={css.wrapperTop}>
        <ChooseDate />
        <AddWaterBtn className="dailyInfoStyles" />
      </div>
      <WaterList />
    </div>
  );
};

export default DailyInfo;
