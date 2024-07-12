import { Section, Container, Button } from 'shared';
import { useModal } from '../../context';
import Logo from '../../shared/components/Logo/Logo';
import UserSettingsForm from '../../components/modal/UserSettingsForm/UserSettingsForm';
// import css from './HomePage.module.css';

const HomePage = () => {
  const { setModalContent } = useModal();
  const handleClick = () => {
    setModalContent(<UserSettingsForm />);
    setModalContent(<Logo />);
  };

  return (
    <Section>
      <Container>Welcome to HomePage</Container>
      <Container>
        <Logo />
        <Button onClick={handleClick}>TestModal</Button>
      </Container>
    </Section>
  );
};

export default HomePage;
