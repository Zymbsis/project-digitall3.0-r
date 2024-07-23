import { useSelector } from 'react-redux';
import { selectSelectedDate } from '../../../redux/water/selectors';
import { parseSelectedDay } from 'helpers';

import css from './ChooseDate.module.css';

const ChooseDate = () => {
  const selectedDate = useSelector(selectSelectedDate);
  const parsedDate = parseSelectedDay(selectedDate);

  return (
    <h3 className={css.chooseDateTitle}>{parsedDate ? parsedDate : 'Today'}</h3>
  );
};

export default ChooseDate;
