import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Section } from 'shared';
import { getUser } from '../../redux/user/operations';
import { selectDailyIntake } from '../../redux/water/selectors';
import { useModal } from '../../context';
// import DeleteWaterModal from '../../components/modal/DeleteWaterModal/DeleteWaterModal';
import LogOutModal from '../../components/modal/LogOutModal/LogOutModal';
// import css from './TrackerPage.module.css';

const TrackerPage = () => {
  const dispatch = useDispatch();
  const water = useSelector(selectDailyIntake);
  console.log(water);
  const { openModal } = useModal();
  return (
    <Section>
      <Container>
        {' '}
        {/* <Button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button> */}
        <Button
          onClick={() => {
            dispatch(getUser());
          }}
        >
          User
        </Button>
        <Button
          onClick={() => {
            openModal(<LogOutModal />);
          }}
        >
          Logout
        </Button>
      </Container>
    </Section>
  );
};

export default TrackerPage;
