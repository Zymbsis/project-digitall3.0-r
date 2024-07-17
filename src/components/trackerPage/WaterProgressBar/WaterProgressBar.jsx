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
  const percentOfWater = Math.round(completionRate * 100);
  // const visibleMarkWater = [0, 50, 100];
  const marks = [
    {
      value: percentOfWater,
      label: `${percentOfWater}%`,
    },
  ];

  useEffect(() => {
    dispatch(getInfoByDay(today));
  }, [dispatch, today]);

  const day = 'Today';
  // const percentOfWater = 23;
  // const invisMarkWater = [0, 50, 100];

  // const marks = [
  //   {
  //     value: percentOfWater,
  //     label: `${percentOfWater}%`,
  //     // label: `${percentOfWater}`,
  //   },
  // ];

  return (
    <div className={css.thumb}>
      <p className={css.boldtext}>{day}</p>
      <Slider
        className={css.slider}
        value={percentOfWater}
        marks={marks}
        // sx={{
        //   '& .MuiSlider-markLabel': {
        //     visibility: invisMarkWater.includes(persentOfWater)
        //       ? 'hidden'
        //       : 'visible',
        //   },
        // }}
      />
      <ul className={css.scale}>
        <li className={css.normaltext}>0%</li>
        <li className={css.normaltext}>50%</li>
        <li className={css.normaltext}>100%</li>
      </ul>
    </div>
  );
};

export default WaterProgressBar;
