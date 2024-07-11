import { Section, Container, Button } from 'shared';
import { useModal } from '../../context';
import Logo from '../../shared/components/Logo/Logo';
// import css from './HomePage.module.css';

const HomePage = () => {
  const { setModalContent } = useModal();
  const handleClick = () => {
    setModalContent(<p>Hello Little Kitten</p>);
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
