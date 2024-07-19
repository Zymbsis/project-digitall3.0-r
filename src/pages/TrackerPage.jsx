import { Container, Logo, Section } from 'shared';
import { WaterDetailedInfo, WaterMainInfo } from 'components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { countUsers } from '../redux/user/operations.js';

const TrackerPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countUsers());
  }, [dispatch]);
  return (
    <Section>
      <Container>
        <Logo />
        <WaterMainInfo />
        <WaterDetailedInfo />
      </Container>
    </Section>
  );
};

export default TrackerPage;
