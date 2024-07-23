import { AdvantagesSection, WelcomeSection } from 'components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Section } from 'shared';
import { useSearchParams } from 'react-router-dom';
import { AXIOS_INSTANCE } from '../redux/constants';
import { setTokenRegister } from '../redux/auth/slice.js';

const HomePage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const code = searchParams.get('code');
      if (code) {
        try {
          const response = await AXIOS_INSTANCE.post('users/confirm-oauth', {
            code,
          });
          const { accessToken } = response.data.data;

          dispatch(setTokenRegister(accessToken));
        } catch (err) {
          console.log(err);
        }
      }
    };

    handleOAuthCallback();
  }, [searchParams, dispatch]);

  return (
    <Section>
      <Container>
        <WelcomeSection />
        <AdvantagesSection />
      </Container>
    </Section>
  );
};

export default HomePage;
