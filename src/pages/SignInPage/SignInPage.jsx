import { Container, Section, Logo } from 'shared';
import { AdvantagesSection } from 'components';
import SignInForm from 'components/sigInPage/SignInForm/SignInForm';
// import css from './SignInPage.module.css';

const SignInPage = () => {
  return (
    <Section>
      <Container>
        <Logo />
        <SignInForm />
        <AdvantagesSection className="signInPage" />
      </Container>
    </Section>
  );
};

export default SignInPage;
