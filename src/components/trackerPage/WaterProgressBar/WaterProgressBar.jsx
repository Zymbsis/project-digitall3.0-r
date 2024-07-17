import { useDispatch, useSelector } from 'react-redux';
import css from './WaterProgressBar.module.css';
import Slider from '@mui/material/Slider';
import { useEffect } from 'react';
// by author
import { selectDailyIntake } from '../../../redux/water/selectors.js';
// by me
// import { selectCompletionRate } from '../../../redux/date/selectors.js';
import { getInfoByDay } from '../../../redux/date/operations';

const WaterProgressBar = () => {
  const dispatch = useDispatch();
  // by author
  const { completionRate } = useSelector(selectDailyIntake);

  // by me
  // const completionRate = useSelector(selectCompletionRate);

  const today = new Date().toISOString().split('T')[0];
  const percentOfWater = completionRate ? Math.round(completionRate * 100) : 0;

  const invisMarkWater = [0, 50, 100];
  const marks = [
    {
      value: percentOfWater,
      label: `${percentOfWater}%`,
    },
  ];

  useEffect(() => {
    dispatch(getInfoByDay(today));
  }, [dispatch, today]);

  return (
    <div className={css.thumb}>
      <p className={css.boldText}>Today</p>
      <Slider
        className={css.slider}
        value={percentOfWater}
        marks={marks}
        sx={{
          '& .MuiSlider-markLabel': {
            visibility: invisMarkWater.includes(percentOfWater)
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
