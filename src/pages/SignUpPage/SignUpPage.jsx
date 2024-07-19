import { Container, Logo, Section } from 'shared';
import { AdvantagesSection } from 'components';
import SignUpForm from 'components/signUpPage/SignUpForm/SignUpForm';
// import css from './SignUpPage.module.css';

const SignUpPage = () => {
  return (
    <Section>
      <Container>
        <Logo />
        <SignUpForm />
        <AdvantagesSection className="signUpPage" />
      </Container>
    </Section>
  );
};

export default SignUpPage;
