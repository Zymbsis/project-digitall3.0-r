import { useNavigate } from 'react-router-dom';
import css from './NotFoundPage.module.css';

import { Section, Container } from 'shared';
import { useEffect, useState } from 'react';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (timer === 10) {
    navigate('/', { replace: true });
  }

  return (
    <Section className={css.section}>
      <Container className={css.container}>
        <div className={css.wrapper}>
          <p className={css.status}>404</p>
          <p className={css.message}>This page could not be found.</p>
        </div>
        <p className={css.timer}>
          You will be automatically redirected to the home page in {10 - timer}{' '}
          seconds
        </p>
      </Container>
    </Section>
  );
};

export default NotFoundPage;
