import ChooseDate from '../ChooseDate/ChooseDate';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';
import css from './DailyInfo.module.css';

const DailyInfo = () => {
  return (
    <div className={css.dailyInfoContainer}>
      <div className={css.wrapperTop}>
        <ChooseDate />
        <AddWaterBtn className="dailyInfoStyles" />
      </div>
      <WaterList />
    </div>
  );
};

export default DailyInfo;

