import { FcGoogle } from 'react-icons/fc';
import { Button } from 'shared';
import css from './GoogleBtn.module.css';

const GoogleBtn = ({ context, onClick }) => {
  return (
    <Button className={css.google_btn} onClick={onClick}>
      <FcGoogle className={css.icon_google} />
      {context}
    </Button>
  );
};

export default GoogleBtn;
