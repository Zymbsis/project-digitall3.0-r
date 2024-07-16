import { useDispatch } from 'react-redux';
import { Button, Container, Section } from 'shared';
import { getUser } from '../../redux/user/operations';
import { useModal } from '../../context';
// import DeleteWaterModal from '../../components/modal/DeleteWaterModal/DeleteWaterModal';
import LogOutModal from '../../components/modal/LogOutModal/LogOutModal';
import css from './TrackerPage.module.css';
import { WaterMainInfo } from 'components';
import { useEffect } from 'react';

const TrackerPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const { openModal } = useModal();
  return (
    <Section>
      <Container className={css.container}>
        <WaterMainInfo />
        <div>
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
        </div>
      </Container>
    </Section>
  );
};

export default TrackerPage;
