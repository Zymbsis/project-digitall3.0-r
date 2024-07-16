import { Icon } from 'shared';
import css from './AddWaterBtn.module.css';

const AddWaterBtn = ({ addWater }) => {
  const handleClick = () => {
    addWater();
  };

  return (
    <div className={css.container}>
      <button type="button" className={css.addWaterBtn} onClick={handleClick}>
        <div className={css.iconPlusWrap}>
          <Icon iconId="icon-plus" className={css.iconPlus} />
        </div>
        Add water
      </button>
    </div>
  );
};

export default AddWaterBtn;

