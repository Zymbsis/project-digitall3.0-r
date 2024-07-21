import StatisticInfo from 'components/trackerPage/StatisticInfo/StatisticInfo.jsx';
import WeekDiagram from 'components/trackerPage/WeekDiagramm/WeekDiagram.jsx';
import React, { useEffect } from 'react';

import css from './StatisticSection.module.css';
import { useDispatch } from 'react-redux';
import { parseMonthForFetch } from 'helpers';
import { getInfoByMonth } from '../../redux/water/operations.js';

const StatisticSection = () => {
  const dispatch = useDispatch();
  const currentMonth = parseMonthForFetch(new Date());

  useEffect(() => {
    dispatch(getInfoByMonth(currentMonth));
  }, [currentMonth, dispatch]);

  return (
    <div className={css.container}>
      <StatisticInfo />
      <WeekDiagram />
    </div>
  );
};

export default StatisticSection;
