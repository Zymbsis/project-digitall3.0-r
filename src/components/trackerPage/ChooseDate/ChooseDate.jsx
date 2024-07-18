import { useSelector } from 'react-redux';
import { selectSelectedDate } from '../../../redux/water/selectors';
import { parseSelectedDate } from 'helpers/';

import css from './ChooseDate.module.css';

const ChooseDate = () => {
  const selectedDate = useSelector(selectSelectedDate);
  const parsedDate = parseSelectedDate(selectedDate);

  return (
    <h3 className={css.chooseDateTitle}>{parsedDate ? parsedDate : 'Today'}</h3>
  );
};

export default ChooseDate;
