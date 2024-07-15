import { AdvantagesSection, WelcomeSection } from 'components';
import { Button, Container, Section } from 'shared';
import css from './HomePage.module.css';
import { useModal } from '../../context';
import DeleteWaterModal from '../../components/modal/DeleteWaterModal/DeleteWaterModal';

const HomePage = () => {
  // const { openModal } = useModal();

  return (
    <Section className={css.section}>
      {/* <Button
        onClick={() => {
          openModal(<DeleteWaterModal />);
        }}
      >
        Click me
      </Button> */}
      <Container className={css.container}>
        <WelcomeSection />
        <AdvantagesSection />
      </Container>
    </Section>
  );
};

export default HomePage;
