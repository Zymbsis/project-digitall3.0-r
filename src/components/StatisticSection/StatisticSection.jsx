import StatisticInfo from 'components/trackerPage/StatisticInfo/StatisticInfo.jsx';
import WeekDiagram from 'components/trackerPage/WeekDiagramm/WeekDiagram.jsx';
import React from 'react';

import css from './StatisticSection.module.css';

const StatisticSection = () => {
  return (
    <div className={css.container}>
      {/* <StatisticInfo /> */}
      <WeekDiagram />
    </div>
  );
};

export default StatisticSection;
