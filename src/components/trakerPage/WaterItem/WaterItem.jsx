
import css from './WaterItem.module.css';
import Icon from '../../shared/components/Icon/Icon.jsx';

const WaterItem = () => {
  return (
    <div className={css.waterItem}>

      <div className={css.waterItemWrap}>
        <p className={css.waterItemMl}>250 ml</p>
        <p className={css.waterItemData}>data</p>
      </div>
      <div className={css.waterItemBtnWrap}>
        <button type="button" className={css.waterItemBtn}>
        <svg className={css.iconSetting}><use href="../../icons/sprite.svg#icon-trash-04"></use></svg>
      <Icon iconId="icon-trash-04"/>
        </button>
        <button type="button" className={css.waterItemBtn}>

        </button>
      </div>
    </div>
  );
};

export default WaterItem;


