import { useState, useEffect } from 'react';
import { AdvantagesSection } from 'components';
import SignUpForm from 'components/signUpPage/SignUpForm/SignUpForm';
import { Container, Section } from 'shared';
import css from './SignUpPage.module.css';

const SignUpPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section>
      <Container className={css.signUpContainer}>
        <SignUpForm />
        {windowWidth > 1439.98 && <AdvantagesSection />}
      </Container>
    </Section>
  );
};

export default SignUpPage;
