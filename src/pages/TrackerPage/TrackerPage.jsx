import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Section } from 'shared';
import { logOut } from '../../redux/auth/operations';
import { getUser } from '../../redux/user/operations';
import {
  addWaterIntake,
  deleteWaterIntake,
  getInfoByDay,
  getInfoByMonth,
  updateWaterIntake,
} from '../../redux/water/operations';
import { selectDailyIntake } from '../../redux/water/selectors';
import { date } from 'yup';
// import css from './TrackerPage.module.css';

const TrackerPage = () => {
  const dispatch = useDispatch();
  const water = useSelector(selectDailyIntake);
  console.log(water);

  return (
    <Section>
      <Container>Welcome to TrackerPage</Container>
      <Button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
      <Button
        onClick={() => {
          dispatch(getUser());
        }}
      >
        User
      </Button>
    </Section>
  );
};

export default TrackerPage;
