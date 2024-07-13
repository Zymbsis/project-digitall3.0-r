import css from './WaterDailyNorma.module.css';

//  треба
// юзер
// норма води (в чому приходить?)
const WaterDailyNorma = () => {
  const dayNorma = 1.5;
  return (
    <div className={css.thumb}>
      <p className={css.boldtext}> {dayNorma} L </p>
      <p className={css.normaltext}> My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
