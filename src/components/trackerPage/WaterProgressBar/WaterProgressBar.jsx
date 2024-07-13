import css from './WaterProgressBar.module.css';
import Slider from '@mui/material/Slider';

const WaterProgressBar = () => {
  // Що потрібно:
  // добова норма,
  // кількіть випитої води,
  // або процентаж одразу
  // день(в якому форматі)
  // user
  const day = 'Today';
  const persentOfWater = 70;
  const invisMarkWater = [0, 50, 100];

  const marks = [
    {
      value: persentOfWater,
      label: `${persentOfWater}%`,
    },
  ];

  return (
    <div className={css.thumb}>
      <p className={css.boldtext}>{day}</p>
      <Slider
        className={css.slider}
        defaultValue={persentOfWater}
        marks={marks}
        sx={{
          '& .MuiSlider-markLabel': {
            visibility: invisMarkWater.includes(persentOfWater)
              ? 'hidden'
              : 'visible',
          },
        }}
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
