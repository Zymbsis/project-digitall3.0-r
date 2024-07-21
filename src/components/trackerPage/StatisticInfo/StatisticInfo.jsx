import React from 'react';
import css from './StatisticInfo.module.css';

import { parseSelectedMonth } from 'helpers';
import { Icon } from 'shared';

const StatisticInfo = ({ selectedDate }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Statistic</h2>
      <div className={css.dateBox}>
        <div
          className={css.iconBtn}
          // onClick={handlePrevMonth}
          // disabled={hasPrevMonth}
        >
          <Icon iconId="icon-chevron-down" className={css.logo} />
        </div>
        <p className={css.date}>{parseSelectedMonth(selectedDate)}</p>
        <div
          className={css.iconBtn}
          // onClick={handleNextMonth}
          // disabled={hasNextMonth}
        >
          <Icon iconId="icon-chevron-down" className={css.logoleft} />
        </div>
        <button
          className={css.iconBtn}
          // onClick={handleNextMonth}
        >
          <Icon iconId="icon-pie-chart-02" className={css.logopiechart} />
        </button>
      </div>
    </div>
  );
};

export default StatisticInfo;
