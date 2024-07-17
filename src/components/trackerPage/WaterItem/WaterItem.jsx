import css from './WaterItem.module.css';
import Icon from 'shared/components/Icon/Icon';

const WaterItem = ({ item }) => {
  return (
    <div className={css.waterItem}>
      <Icon iconId="icon-Vector" className={css.waterIcon} />
      <div className={css.waterItemWrap}>
        <p className={css.waterItemMl}>{`${item.volume} ml`}</p>
        <p className={css.waterItemData}>{item.time}</p>
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
