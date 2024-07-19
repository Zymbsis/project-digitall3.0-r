import { useModal } from 'context';
import { Icon } from 'shared';
import { parsedTime } from 'helpers';
import WaterModal from 'components/modal/WaterModal/WaterModal';
import DeleteWaterModal from 'components/modal/DeleteWaterModal/DeleteWaterModal';

import css from './WaterItem.module.css';

const WaterItem = ({ item: { _id, volume, time } }) => {
  const { openModal } = useModal();
  const formattedTime = parsedTime(time);

  const handleDelete = () => {
    openModal(<DeleteWaterModal id={_id} />);
  };
  const handleEdit = () => {
    openModal(<WaterModal type="edit" id={_id} />);
  };

  return (
    <div className={css.waterItem}>
      <Icon iconId="icon-Vector" className={css.waterIcon} />
      <div className={css.waterItemWrap}>
        <p className={css.waterItemMl}>{`${volume} ml`}</p>
        <p className={css.waterItemData}>{formattedTime}</p>
      </div>
      <div className={css.waterItemBtnWrap}>
        <button type="button" className={css.waterItemBtn}>
          <Icon
            iconId="icon-edit-2"
            className={css.waterIconBtn}
            onClick={handleEdit}
          />
        </button>
        <button type="button" className={css.waterItemBtn}>
          <Icon
            iconId="icon-trash-04"
            className={css.waterIconBtn}
            onClick={handleDelete}
          />
        </button>
      </div>
    </div>
  );
};

export default WaterItem;
