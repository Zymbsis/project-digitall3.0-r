import { useDispatch } from 'react-redux';
import { Button, Container, Section } from 'shared';
import { getUser } from '../../redux/user/operations';
import { useModal } from '../../context';
// import DeleteWaterModal from '../../components/modal/DeleteWaterModal/DeleteWaterModal';
import LogOutModal from '../../components/modal/LogOutModal/LogOutModal';
import css from './TrackerPage.module.css';
import { WaterDetailedInfo, WaterMainInfo } from 'components';
import { useEffect } from 'react';
import UserSettingsForm from '../../components/modal/UserSettingsForm/UserSettingsForm';

const TrackerPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const { openModal } = useModal();
  return (
    <Section>
      {/* <Button
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Logout
        </Button> */}

      <Button
        onClick={() => {
          openModal(<LogOutModal />);
        }}
      >
        Logout
      </Button>

      <Button
        onClick={() => {
          openModal(<UserSettingsForm />);
        }}
      >
        UserSettings
      </Button>
      <Container className={css.container}>
        <WaterMainInfo />

        <WaterDetailedInfo />
      </Container>
    </Section>
  );
};

export default TrackerPage;
