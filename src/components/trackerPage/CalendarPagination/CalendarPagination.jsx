import css from './CalendarPagination.module.css'
import { Icon } from 'shared';
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/user/selectors";
import { formatDate } from "./CalendarPaginationFunction.jsx";

const CalendarPagination = ({ selectedDate, setSelectedDate}) => {

  const user = useSelector(selectCurrentUser);
  const userCreatedDate = new Date(user?.createdAt);

  const handlePrevMonth = () => {
    setSelectedDate((prevDate) => {

      const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      return prevMonthDate
    })

   };
 
  const handleNextMonth = () => {
    setSelectedDate((nextDate) => {
      const nextMonthDate = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 1);
      return nextMonthDate
    })
  };

  const isPrevDis = selectedDate.getFullYear() < userCreatedDate.getFullYear() ||
  (selectedDate.getFullYear() === userCreatedDate.getFullYear() && 
  selectedDate.getMonth() <= userCreatedDate.getMonth());
 
 
 return (
 <div className={css.container}>
  <h2 className={css.title}>Month</h2>
  <div className={css.dateBox}>
  <button className={css.IconBtn} onClick={handlePrevMonth} disabled={isPrevDis}>
      <Icon iconId="icon-chevron-left" className={css.logo}/>
  </button>
  <p className={css.date}>{formatDate(selectedDate)}</p>
  <button className={css.IconBtn} onClick={handleNextMonth}>
  <Icon iconId="icon-chevron-right" className={css.logo}/>
  </button>
  </div>
</div>
)
};

export default CalendarPagination;



  // const user = {
  //   email: 'test@example.com',
  //   password: '12345678',
  //   name: 'Kate',
  //   gender: 'woman',
  //   avatar: 'image.png',
  //   dailyNorma: 1.8,
  //   weight: 0,
  //   activeHours: 0,
  //   createdAt: '2024-02-01T00:00:00.000Z',
  //   updatedAt: '2024-07-01T00:00:00.000Z'
  // };