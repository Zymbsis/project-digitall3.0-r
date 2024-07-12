import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import css from './WaterMainInfo.module.css';
import bottle from '../../../img/bottle.png';

const WaterMainInfo = () => {
  return (
    <div className={css.container}>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
      <div className={css.imgWrapper}>
        <img className={css.img} src={bottle} alt="Water bottle" />
      </div>
    </div>
  );
};

export default WaterMainInfo;
