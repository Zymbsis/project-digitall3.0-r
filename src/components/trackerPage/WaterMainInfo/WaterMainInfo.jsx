import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
  return (
    <div className={css.container}>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </div>
  );
};

export default WaterMainInfo;
