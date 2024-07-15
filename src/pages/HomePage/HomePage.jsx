import { AdvantagesSection, WelcomeSection } from 'components';
import { Button, Container, Section } from 'shared';
import css from './HomePage.module.css';
import { useModal } from '../../context';
// import DeleteWaterModal from '../../components/modal/DeleteWaterModal/DeleteWaterModal';
import UserSettingsModal from 'components/modal/UserSettingsModal/UserSettingsModal.jsx';

const HomePage = () => {
  const { openModal } = useModal();
  return (
    <Section>
      <Button
        onClick={() => {
          openModal(<UserSettingsModal />);
        }}
      >
        Click me
      </Button>
      <Container className={css.container}>
        <WelcomeSection />
        <AdvantagesSection />
      </Container>
    </Section>
  );
};

export default HomePage;
