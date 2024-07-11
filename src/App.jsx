import { Section, Container } from 'shared';
import React, { useState } from "react";
import  ChooseDate  from "../src/components/trakerPage/ChooseDate/ChooseDate";
import AddWaterBtn from "../src/components/trakerPage/AddWaterBtn/AddWaterBtn";
import WaterList from "../src/components/trakerPage/WaterList/WaterList";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [waterData, setWaterData] = useState([]);

  const addWater = (waterItem) => {
    setWaterData([...waterData, waterItem]);
  };

  const deleteWater = (id) => {
    setWaterData(waterData.filter(item => item.id !== id));
  };

  return (
    <div>
      <ChooseDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <AddWaterBtn addWater={addWater} />
      <WaterList waterData={waterData} deleteWater={deleteWater} />
    </div>
  );
};

export default App;
