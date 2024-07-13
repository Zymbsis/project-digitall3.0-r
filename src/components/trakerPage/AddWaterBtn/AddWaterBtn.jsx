import css from './AddWaterBtn.module.css';
// import clsx from 'clsx';

// логіка на відкриття модалки

const AddWaterBtn = () => {
  return (
    <div>
      <button className={css.btn} type="button">
        <span className={css.boldtext}>Add water</span>
      </button>
    </div>
  );
};

export default AddWaterBtn;
