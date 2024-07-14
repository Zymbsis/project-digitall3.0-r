
import css from './WaterItem.module.css';



const WaterItem = () => {
  return (
    <div className={css.waterItem}>

      <div className={css.waterItemWrap}>
        <p className={css.waterItemMl}>250 ml</p>
        <p className={css.waterItemData}>data</p>
      </div>
      <div className={css.waterItemBtnWrap}>
        <button type="button" className={css.waterItemBtn}>

        </button>
        <button type="button" className={css.waterItemBtn}>

        </button>
      </div>
    </div>
  );
};

export default WaterItem;


