import { useSelector } from 'react-redux';
import { useModal } from 'context';
import { selectSelectedDate } from '../../../redux/water/selectors.js';
import { Icon } from 'shared';
import WaterModal from '../../modal/WaterModal/WaterModal';
import clsx from 'clsx';
import css from './AddWaterBtn.module.css';

const AddWaterBtn = ({ className }) => {
  const { openModal } = useModal();
  const selectedDate = useSelector(selectSelectedDate);

  const handleClick = () => {
    openModal(<WaterModal date={selectedDate} />);
  };

  return (
    <div className={css[className]}>
      <button
        type="button"
        className={clsx(css.addWaterBtn, 'tour-add-water')}
        onClick={handleClick}
      >
        <div className={css.iconPlusWrap}>
          <Icon iconId="icon-plus" className={css.iconPlus} />
        </div>
        Add water
      </button>
    </div>
  );
};

export default AddWaterBtn;
