import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';

import css from './WaterMainInfo.module.css';
import clsx from 'clsx';

const WaterMainInfo = () => {
  return (
    <div className={clsx(css.container, 'tour-water-main-info')}>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn className="waterMainInfoStyles" />
    </div>
  );
};

export default WaterMainInfo;
