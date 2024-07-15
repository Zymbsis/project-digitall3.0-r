import { Icon } from 'shared';
import css from './AddWaterBtn.module.css';
import { Button } from 'shared';
// import clsx from 'clsx';

// логіка на відкриття модалки

const AddWaterBtn = () => {
  const handleClick = () => {
    alert('Button clicked!');
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
