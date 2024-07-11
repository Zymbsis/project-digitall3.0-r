import css from './WaterList.module.css'

import React from "react";
import WaterItem from "../WaterItem/WaterItem";

const WaterList = ({ waterData }) => {
  return (
    <div className={css["water-list-container"]}>
      <div className={css["water-list"]}>
        {waterData.map((waterItem, index) => (
          <WaterItem key={index} waterItem={waterItem} />
        ))}
      </div>
    </div>
  );
};

export default WaterList;
