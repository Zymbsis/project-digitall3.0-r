import React from 'react';
import css from './StatisticInfo.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/user/selectors';
import { getInfoByMonth } from '../../../redux/water/operations';
import {
  parseDayForFetch,
  parseMonthForFetch,
  parseSelectedMonth,
} from 'helpers';
import { Icon } from 'shared';

const StatisticInfo = ({ selectedDate, setSelectedDate }) => {
  const dispatch = useDispatch();

  const { createdAt } = useSelector(selectCurrentUser);
  // const userCreatedDate = createdAt ? new Date(createdAt) : new Date();
  // const limitDate = new Date();
  // const currentDay = parseDayForFetch(new Date());
  // limitDate.setFullYear(limitDate.getFullYear() + 1);

  // const hasPrevMonth =
  //   selectedDate.getFullYear() < userCreatedDate.getFullYear() ||
  //   (selectedDate.getFullYear() === userCreatedDate.getFullYear() &&
  //     selectedDate.getMonth() <= userCreatedDate.getMonth());

  // const hasNextMonth =
  //   selectedDate.getFullYear > limitDate.getFullYear() ||
  //   (selectedDate.getFullYear() === limitDate.getFullYear() &&
  //     selectedDate.getMonth() >= limitDate.getMonth());

  // useEffect(() => {
  //   const dateForFetch = parseMonthForFetch(selectedDate, currentDay);
  //   dispatch(getInfoByMonth(dateForFetch));
  // }, [selectedDate, currentDay, dispatch]);

  // const handlePrevMonth = () => {
  //   setSelectedDate(prevDate => {
  //     const prevMonthDate = new Date(
  //       prevDate.getFullYear(),
  //       prevDate.getMonth() - 1,
  //       1
  //     );
  //     return prevMonthDate;
  //   });
  // };

  // const handleNextMonth = () => {
  //   setSelectedDate(nextDate => {
  //     const nextMonthDate = new Date(
  //       nextDate.getFullYear(),
  //       nextDate.getMonth() + 1,
  //       1
  //     );
  //     return nextMonthDate;
  //   });
  // };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Statistic</h2>
      <div className={css.dateBox}>
        <button
          className={css.iconBtn}
          // onClick={handlePrevMonth}
          // disabled={hasPrevMonth}
        >
          <Icon iconId="icon-chevron-left" className={css.logo} />
        </button>
        <p className={css.date}>{parseSelectedMonth(selectedDate)}</p>
        <button
          className={css.iconBtn}
          // onClick={handleNextMonth}
          // disabled={hasNextMonth}
        >
          <Icon iconId="icon-chevron-right" className={css.logo} />
        </button>
      </div>
    </div>
  );
};

export default StatisticInfo;
