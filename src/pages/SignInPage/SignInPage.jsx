import SignInForm from 'components/sigInPage/SignInForm/SignInForm';
import { Container, Section } from 'shared';
import Logo from 'shared/components/Logo/Logo';
import css from './SignInPage.module.css';
import { NavLink } from 'react-router-dom';

const SignInPage = () => {
  return (
    <Section>
      <Container>
        <div className={css.wrapper}>
          <Logo />
          <h2 className={css.title}>Sign in</h2>
          <SignInForm />
          <p className={css.signUpText}>
            Don't have an account?{' '}
            <NavLink to="/signup" className={css.signUpLink}>
              Sign Up
            </NavLink>
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default SignInPage;
