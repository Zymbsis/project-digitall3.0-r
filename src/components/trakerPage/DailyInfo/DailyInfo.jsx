// import css from './DailyInfo.module.css'
import WaterList from "components/trakerPage/WaterList/WaterList";
import ChooseDate from "components/trakerPage/ChooseDate/ChooseDate";
import AddWaterBtn from "components/trakerPage/AddWaterBtn/AddWaterBtn";
const DailyInfo = ({ selectedDate, setSelectedDate, waterData, addWater, deleteWater }) => {
  return (
    <div>
      <ChooseDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <AddWaterBtn addWater={addWater} />
      <WaterList waterData={waterData} deleteWater={deleteWater} />
    </div>
  );
};

export default DailyInfo;
