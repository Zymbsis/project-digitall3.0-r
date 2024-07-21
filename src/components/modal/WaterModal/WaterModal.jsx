import WaterForm from '../WaterForm/WaterForm';
import { Title } from 'shared';
import css from './WaterModal.module.css';

const WaterModal = ({ type = 'add', id, date, time, volume }) => {
  const title =
    type === 'add' ? 'Add water' : 'Edit the entered amount of water';
  const subtitle = type === 'add' ? 'Choose a value' : 'Correct entered data:';

  return (
    <div className={css.wrapper}>
      <Title className={css.title}>{title}</Title>
      <p className={css.subtitle}>{subtitle}</p>
      <WaterForm type={type} id={id} date={date} time={time} volume={volume} />
    </div>
  );
};

export default WaterModal;
