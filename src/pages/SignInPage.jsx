import { Container, Section, Logo } from 'shared';
import { AdvantagesSection } from 'components';
import SignInForm from 'components/sigInPage/SignInForm/SignInForm';

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
