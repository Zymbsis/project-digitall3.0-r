import { useDispatch } from 'react-redux';
import { Button, Container, Section } from 'shared';
import { logOut } from '../../redux/auth/operations';
import { getUser } from '../../redux/user/operations';
// import css from './TrackerPage.module.css';

const TrackerPage = () => {
  const dispatch = useDispatch();
  return (
    <Section>
      <Container>Welcome to TrackerPage</Container>
      <Button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
      <Button
        onClick={() => {
          dispatch(getUser());
        }}
      >
        User
      </Button>
    </Section>
  );
};

export default TrackerPage;
