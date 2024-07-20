import { Icon } from 'shared';
import css from './WaterAmount.module.css';

const WaterAmount = ({ amount, handleDecrease, handleIncrease }) => {
  return (
    <div className={css.amountWrapper}>
      <p className={css.label}>Amount of water:</p>
      <div className={css.amountControl}>
        <button
          onClick={handleDecrease}
          type="button"
          className={css.controlBtn}
        >
          <Icon iconId="icon-water-decrease" className={css.icon} />
        </button>
        <div className={css.amount}>
          {amount < 50 ? 50 : amount > 1000 ? 1000 : amount} ml
        </div>
        <button
          onClick={handleIncrease}
          type="button"
          className={css.controlBtn}
        >
          <Icon iconId="icon-water-increase" className={css.icon} />
        </button>
      </div>
    </div>
  );
};

export default WaterAmount;
