import css from './CustomToast.module.css';
import { Button } from 'shared';

const customId = 'custom-id-yes';

export const toastStyles = {
  position: 'top-right',
  autoClose: 10000,
  toastId: customId,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  className: `${css.toast_body}`,
  theme: 'light',
};

const CustomToast = ({ setIsOpen }) => (
  <div className={css.wrapper}>
    <p className={css.text}>
      Welcome to our website! Do you want to learn how to use our site quickly?
      Take a brief onboarding course.
    </p>
    <Button onClick={() => setIsOpen(true)} className={css.btn}>
      Start Course
    </Button>
  </div>
);
export default CustomToast;
