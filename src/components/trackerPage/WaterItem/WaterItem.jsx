import { useModal } from 'context';
import css from './WaterItem.module.css';
import Icon from 'shared/components/Icon/Icon';
import WaterModal from 'components/modal/WaterModal/WaterModal';
import DeleteWaterModal from 'components/modal/DeleteWaterModal/DeleteWaterModal';

const WaterItem = ({ water }) => {
  const { openModal } = useModal();
  const handleClickDelete = () => {
    openModal(<DeleteWaterModal type={'add'} />);
  };
  const handleClickEdit = () => {
    openModal(<WaterModal type={'add'} />);
  };

  const convertTime = time => {
    let [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `${hours}` : hours;
    return `${hours}:${minutes} ${period}`;
  };

  const formattedTime = convertTime(water.time);

  return (
    <div className={css.waterItem}>
      <Icon iconId="icon-Vector" className={css.waterIcon} />
      <div className={css.waterItemWrap}>
        <p className={css.waterItemMl}>{water.volume} ml</p>
        <p className={css.waterItemData}>{formattedTime}</p>
      </div>
      <div className={css.waterItemBtnWrap}>
        <button type="button" className={css.waterItemBtn}>
          <Icon
            iconId="icon-edit-2"
            className={css.waterIconBtn}
            onClick={handleClickEdit}
          />
        </button>
        <button type="button" className={css.waterItemBtn}>
          <Icon
            iconId="icon-trash-04"
            className={css.waterIconBtn}
            onClick={handleClickDelete}
          />
        </button>
      </div>
    </div>
  );
};

export default WaterItem;
