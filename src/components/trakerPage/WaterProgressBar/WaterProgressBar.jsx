import css from './WaterProgressBar.module.css';

import ProgressBar from '@ramonak/react-progress-bar';

const WaterProgressBar = () => {
  return (
    <div className={css.thumb}>
      <p className={css.boldtext}>Today</p>

      <ul className={css.scale}>
        <li className={css.normaltext}>0%</li>
        <li className={css.normaltext}>50%</li>
        <li className={css.normaltext}>100%</li>
      </ul>
    </div>
  );
};

export default WaterProgressBar;
