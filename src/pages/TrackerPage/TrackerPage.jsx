import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Logo, Section } from 'shared';
import { getUser } from '../../redux/user/operations';
import { WaterDetailedInfo, WaterMainInfo } from 'components';
import css from './TrackerPage.module.css';

const TrackerPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Section>
      <Container className={css.container}>
        <Logo />
        <WaterMainInfo />
        <WaterDetailedInfo />
      </Container>
    </Section>
  );
};

export default TrackerPage;
