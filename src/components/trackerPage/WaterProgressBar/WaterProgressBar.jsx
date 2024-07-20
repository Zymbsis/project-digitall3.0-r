import { useSelector } from 'react-redux';
import css from './WaterProgressBar.module.css';
import Slider from '@mui/material/Slider';
import { selectCompletionRate } from '../../../redux/water/selectors.js';

const WaterProgressBar = () => {
  const completionRate = useSelector(selectCompletionRate);

  const percentOfWater = completionRate ? Math.round(completionRate * 100) : 0;

  const invisibleMarkWater = [0, 50, 100];
  const marks = [
    {
      value: percentOfWater,
      label: `${percentOfWater}%`,
    },
  ];

  return (
    <div className={css.thumb}>
      <p className={css.boldText}>Today</p>
      <Slider
        className={css.slider}
        value={percentOfWater}
        marks={marks}
        sx={{
          '& .MuiSlider-markLabel': {
            visibility: invisibleMarkWater.includes(percentOfWater)
              ? 'hidden'
              : 'visible',
          },
        }}
      />
      <ul className={css.scale}>
        <li className={css.normalText}>0%</li>
        <li className={css.normalText}>50%</li>
        <li className={css.normalText}>100%</li>
      </ul>
    </div>
  );
};

export default WaterProgressBar;
