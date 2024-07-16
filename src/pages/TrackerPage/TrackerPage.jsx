import { WaterMainInfo, WaterDetailedInfo } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Section } from 'shared';
import { logOut } from '../../redux/auth/operations';
import { getUser } from '../../redux/user/operations';
import { selectDailyIntake } from '../../redux/water/selectors';
// import css from './TrackerPage.module.css';

const TrackerPage = () => {
  const dispatch = useDispatch();
  const water = useSelector(selectDailyIntake);
  console.log(water);

  return (
    <Section>
      <Container>
        <WaterMainInfo />
        <WaterDetailedInfo />
      </Container>
    </Section>
  );
};

export default TrackerPage;
