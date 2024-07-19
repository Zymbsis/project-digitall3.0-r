import { AdvantagesSection, WelcomeSection } from 'components';
import { Container, Section } from 'shared';

const HomePage = () => {
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
