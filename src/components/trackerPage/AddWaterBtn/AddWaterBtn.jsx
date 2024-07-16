import { Icon } from 'shared';
import css from './AddWaterBtn.module.css';
import { Button } from 'shared';
import { useModal } from '../../../context';
import WaterModal from '../../modal/WaterModal/WaterModal';
// import clsx from 'clsx';

const AddWaterBtn = () => {
  const { openModal } = useModal();
  const handleClick = () => {
    openModal(<WaterModal type={'add'} />);
  };

  return (
    <div>
      <Button onClick={handleClick} className={css.btn} type="button">
        <div className={css.thumb}>
          <Icon iconId="icon-plus" className={css.iconstyle} />
          <span className={css.boldtext}>Add water</span>
        </div>
      </Button>
    </div>
  );
};

export default AddWaterBtn;
