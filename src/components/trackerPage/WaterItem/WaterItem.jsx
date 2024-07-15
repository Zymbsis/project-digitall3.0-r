// import css from './WaterItem.module.css'

import css from './WaterItem.module.css';
import Icon from 'shared/components/Icon/Icon';


const WaterItem = () => {
  return (
    <div className={css.waterItem}>
           <Icon iconId="icon-Vector" className={css.waterIcon} />
      <div className={css.waterItemWrap}>
        <p className={css.waterItemMl}>250 ml</p>
        <p className={css.waterItemData}>data</p>
      </div>
      <div className={css.waterItemBtnWrap}>
        <button type="button" className={css.waterItemBtn}>
        <Icon iconId="icon-edit-2" className={css.waterIconBtn} />
        </button>
        <button type="button" className={css.waterItemBtn}>
   <Icon iconId="icon-trash-04" className={css.waterIconBtn} />
        </button>
      </div>
    </div>

  );
};

export default WaterItem;
