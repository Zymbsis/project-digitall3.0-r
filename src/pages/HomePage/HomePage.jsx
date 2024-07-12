import { Section, Container, Button } from 'shared';
import { useModal } from '../../context';
import Logo from '../../shared/components/Logo/Logo';
import UserSettingsForm from '../../components/modal/UserSettingsForm/UserSettingsForm';
// import css from './HomePage.module.css';
import DailyInfo from '../../components/trakerPage/DailyInfo/DailyInfo';
import { useState } from 'react';
const HomePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [waterData, setWaterData] = useState([]);

  const addWater = (newWaterData) => {
    setWaterData([...waterData, newWaterData]);
  };

  const deleteWater = (id) => {
    setWaterData(waterData.filter(waterItem => waterItem.id !== id));
  };
  const { setModalContent } = useModal();
  const handleClick = () => {
    setModalContent(<UserSettingsForm />);
    // setModalContent(<Logo />);
  };

  return (

     <Section>
      <Container>Welcome to HomePage</Container>
      <Container>
        <Logo />
        <Button onClick={handleClick}>TestModal</Button>
      </Container>
      <Container>
      <DailyInfo
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          waterData={waterData}
          addWater={addWater}
          deleteWater={deleteWater}
        />
      </Container>
    </Section>
  );



};

export default HomePage;
