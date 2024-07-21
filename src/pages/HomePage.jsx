import { AdvantagesSection, WelcomeSection } from 'components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { countUsers } from '../redux/user/operations.js';
import { Container, Section } from 'shared';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countUsers());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <WelcomeSection />
        <AdvantagesSection />
      </Container>
    </Section>
  );
};

export default HomePage;
