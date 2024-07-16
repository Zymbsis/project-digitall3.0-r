import SignInForm from 'components/sigInPage/SignInForm/SignInForm';
import { Container, Section } from 'shared';
import Logo from 'shared/components/Logo/Logo';
import css from './SignInPage.module.css';
import { AdvantagesSection } from 'components';
import { useEffect, useState } from 'react';

import { useModal } from 'context';
import UserSettingsModal from 'components/modal/UserSettingsModal/UserSettingsModal.jsx';

const SignInPage = () => {
  const { openModal } = useModal();
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
      <Container className={css.container}>
        <div className={css.wrapper}>
          <Logo />
          <SignInForm />
        </div>
        {windowWidth > 1439.98 && <AdvantagesSection />}
      </Container>
    </Section>
  );
};

export default SignInPage;
