import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';
import { activateUser, requestActivationEmail } from '../redux/auth/operations';
import { Loader, SuccessfullySendEmail } from 'components';
import { Button, Container, Section } from 'shared';
import { selectIsError } from '../redux/auth/selectors';
import css from './ActivationPage.module.css';
import { useModal } from '../context';

const ActivationPage = () => {
  const dispatch = useDispatch();
  const { openModal } = useModal();
  const [searchParams] = useSearchParams();
  const activationToken = searchParams.get('token');
  const { message } = useSelector(selectIsError);

  useEffect(() => {
    if (!activationToken) return;
    dispatch(activateUser(activationToken));
  }, [activationToken, dispatch]);

  return (
    <Section>
      <Container>
        {!message && <Loader />}
        {message === 'Account has already been activated. Please, sign in' && (
          <div className={css.container}>
            <p>{message}</p>
            <NavLink to="/signin" className={css.buttonSignIn}>
              Sign In
            </NavLink>
          </div>
        )}
        {message === 'Activation token expired or invalid' && (
          <div className={css.container}>
            <p>{message}</p>
            <Button
              className={css.buttonResendMail}
              onClick={() => {
                dispatch(requestActivationEmail(activationToken));
                openModal(<SuccessfullySendEmail email={''} />);
              }}
            >
              Send again
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default ActivationPage;
