import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Section } from 'shared';
import { logOut } from '../../redux/auth/operations';
import { getUser } from '../../redux/user/operations';
import { selectDailyIntake } from '../../redux/water/selectors';
import { useModal } from '../../context';
import DeleteWaterModal from '../../components/modal/DeleteWaterModal/DeleteWaterModal';
// import css from './TrackerPage.module.css';

const TrackerPage = () => {
  const dispatch = useDispatch();
  const water = useSelector(selectDailyIntake);
  console.log(water);
  const { openModal } = useModal();
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
      <Button
        onClick={() => {
          openModal(<DeleteWaterModal id={''} />);
        }}
      >
        Modal
      </Button>
    </Section>
  );
};

export default TrackerPage;
