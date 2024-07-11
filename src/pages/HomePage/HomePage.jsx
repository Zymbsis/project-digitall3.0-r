import { AdvantagesSection, WelcomeSection } from 'components';
import { Section, Container } from 'shared';
// import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <Section>
      <WelcomeSection />
      <AdvantagesSection />
    </Section>
  );
};

export default HomePage;
