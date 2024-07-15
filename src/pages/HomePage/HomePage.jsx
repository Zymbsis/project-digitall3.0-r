import { AdvantagesSection, WelcomeSection } from 'components';
import { Button, Container, Section } from 'shared';
import css from './HomePage.module.css';
import { useModal } from '../../context';
import DeleteWaterModal from '../../components/modal/DeleteWaterModal/DeleteWaterModal';
import DailyInfo from '../../components/trackerPage/DailyInfo/DailyInfo';

const HomePage = () => {
  const { openModal } = useModal();

  return (
    <Section>
      <Button
        onClick={() => {
          openModal(<DeleteWaterModal />);
        }}
      >
        Click me
      </Button>
      <Container className={css.container}>
        <WelcomeSection />
        <AdvantagesSection />
        <DailyInfo />
      </Container>
    </Section>
  );
};

export default HomePage;
