import { FcGoogle } from 'react-icons/fc';
import { Button } from 'shared';
import css from './GoogleBtn.module.css';

const GoogleBtn = ({ onClick }) => {
  <Button className={css.google_btn} onClick={onClick}>
    <FcGoogle className={css.icon_google} />
    Sign Up with Google
  </Button>;
};

export default GoogleBtn;
