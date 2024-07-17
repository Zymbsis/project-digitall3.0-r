import { useModal } from 'context';
import css from './WaterItem.module.css';
import Icon from 'shared/components/Icon/Icon';
import WaterModal from 'components/modal/WaterModal/WaterModal';
import DeleteWaterModal from 'components/modal/DeleteWaterModal/DeleteWaterModal';

const WaterItem = ({ item }) => {
  const { openModal } = useModal();

  const onDelete = id => {
    openModal(<DeleteWaterModal _id={item._id} />);
  };
  const onEdit = () => {
    openModal(<WaterModal type={'edit'} />);
  };

  const convertTime = time => {
    let [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `${hours}` : hours;
    return `${hours}:${minutes} ${period}`;
  };

  const formattedTime = convertTime(item.time);

  return (
    <div className={css.waterItem}>
      <Icon iconId="icon-Vector" className={css.waterIcon} />
      <div className={css.waterItemWrap}>
        <p className={css.waterItemMl}>{`${item.volume} ml`}</p>
        <p className={css.waterItemData}>{formattedTime}</p>
      </div>
      <div className={css.waterItemBtnWrap}>
        <button type="button" className={css.waterItemBtn}>
          <Icon
            iconId="icon-edit-2"
            className={css.waterIconBtn}
            onClick={() => onEdit(item._id)}
          />
        </button>
        <button type="button" className={css.waterItemBtn}>
          <Icon
            iconId="icon-trash-04"
            className={css.waterIconBtn}
            onClick={() => onDelete(item._id)}
          />
        </button>
      </div>
    </div>
  );
};

export default WaterItem;
