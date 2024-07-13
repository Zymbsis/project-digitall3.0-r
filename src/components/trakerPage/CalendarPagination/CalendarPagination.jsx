import css from './CalendarPagination.module.css'
import { useEffect, useState } from "react";

const fetchUser = async => {
  return {
    email: 'test@example.com',
    password: '12345678',
    name: 'Kate',
    gender: 'woman',
    avatar: 'image.png',
    dailyNorma: 1.8,
    weight: 0,
    activeHours: 0,
    createdAt: '2024-02-01T00:00:00.000Z',
    updatedAt: '2024-07-01T00:00:00.000Z'
  };
}
const CalendarPagination = ({ selectedDate, setSelectedDate, userDate}) => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [navDate, setNavDate] = useState(new Date());
//  const [user, setUser] = useState(null)

// useEffect(() => {
//   const getUser = async () => {
//     const userData = await fetchUser();
//     setUser(userData);
//     setCurrentDate(new Date());
//     setNavDate(new Date());
//   };
//   getUser();
// }, []);

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

  const formatDate = (date) => {
    const format = { month: 'long', year: 'numeric'};
    const data = new Intl.DateTimeFormat('en-US', format).format(date)
    const [month, year] = data.split(' ');
    return `${month}, ${year}`
  };
  // if (!user) {
  //   return <div>User not found!</div>;
  // }
  // const userDate = new Date(user.createdAt);

  const isPrevDis = selectedDate.getFullYear() < userDate.getFullYear() ||
  (selectedDate.getFullYear() === userDate.getFullYear() && 
  selectedDate.getMonth() <= userDate.getMonth());
 
 
 return (
 <div className={css.container}>
  <h2 className={css.title}>Month</h2>
  <div className={css.dateBox}>
  <button onClick={handlePrevMonth} disabled={isPrevDis}>
      {'<'}
  </button>
  <p className={css.date}>{formatDate(selectedDate)}</p>
  <button onClick={handleNextMonth}>
    {'>'}
  </button>
  </div>
</div>
)
};

export default CalendarPagination;
