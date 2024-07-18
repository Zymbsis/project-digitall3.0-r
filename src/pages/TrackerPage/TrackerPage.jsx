import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Section } from 'shared';
import { getUser } from '../../redux/user/operations';
import { WaterDetailedInfo, WaterMainInfo } from 'components';
import WaterModal from '../../components/modal/WaterModal/WaterModal';
import { useModal } from '../../context';
import css from './TrackerPage.module.css';

const TrackerPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const { openModal } = useModal();
  return (
    <Section>
      <Button
        onClick={() => {
          openModal(<WaterModal type="edit" />);
        }}
      >
        Edit Water
      </Button>
      <Container className={css.container}>
        <WaterMainInfo />
        <WaterDetailedInfo />
      </Container>
    </Section>
  );
};

export default TrackerPage;
