// import css from './WaterDetailedInfo.module.css'

import DailyInfo from '../DailyInfo/DailyInfo';
import MonthInfo from '../MonthInfo/MonthInfo';
import UserPanel from '../UserPanel/UserPanel';

const WaterDetailedInfo = () => {
  return (
    <div>
      <UserPanel />
      <DailyInfo />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
