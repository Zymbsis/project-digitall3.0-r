import { AdvantagesSection, WelcomeSection } from 'components';
import { Container, Section } from 'shared';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <Section>
      <Container className={css.container}>
        <WelcomeSection />
        <AdvantagesSection />
      </Container>
    </Section>
  );
};

export default HomePage;
