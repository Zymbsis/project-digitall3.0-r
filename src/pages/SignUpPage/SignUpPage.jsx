import SignUpForm from 'components/signUpPage/SignUpForm/SignUpForm';
import { Container, Section } from 'shared';
import Logo from '../../shared/components/Logo/Logo';
import css from './SignUpPage.module.css';

const SignUpPage = () => {
  return (
    <Section>
      <Container className={css.signUpContainer}>
        {/* Welcome to SignUpPage */}
        <Logo className={css.singUpLogo} />
        <SignUpForm />
      </Container>
    </Section>
  );
};

export default SignUpPage;
