import { Icon } from 'shared';
import css from './WaterAmount.module.css';

const WaterAmount = ({ amount, decrease, increase }) => {
  return (
    <div className={css.amountWrapper}>
      <p className={css.label}>Amount of water:</p>
      <div className={css.amountControl}>
        <button onClick={decrease} type="button" className={css.controlBtn}>
          <Icon iconId="icon-water-decrease" className={css.icon} />
        </button>
        <div className={css.amount}>{amount} ml</div>
        <button onClick={increase} type="button" className={css.controlBtn}>
          <Icon iconId="icon-water-increase" className={css.icon} />
        </button>
      </div>
    </div>
  );
};

export default WaterAmount;
