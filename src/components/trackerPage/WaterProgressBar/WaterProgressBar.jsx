import { useDispatch, useSelector } from 'react-redux';
import css from './WaterProgressBar.module.css';
import Slider from '@mui/material/Slider';
import { useEffect } from 'react';
import { getInfoByDay } from '../../../redux/water/operations.js';
import { selectDailyIntake } from '../../../redux/water/selectors.js';

const WaterProgressBar = () => {
  const dispatch = useDispatch();
  const { completionRate } = useSelector(selectDailyIntake);
  const today = new Date().toISOString().split('T')[0];
  const percentOfWater = completionRate ? Math.round(completionRate * 100) : 0;

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
      <Slider className={css.slider} value={percentOfWater} marks={marks} />
      <ul className={css.scale}>
        <li className={css.normalText}>0%</li>
        <li className={css.normalText}>50%</li>
        <li className={css.normalText}>100%</li>
      </ul>
    </div>
  );
};

export default WaterProgressBar;
