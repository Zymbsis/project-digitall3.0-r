import { Button, Title } from 'shared';
import css from './SuccessfullySendEmail.module.css';
import { useModal } from 'context';

const SuccessfullySendEmail = ({ email }) => {
  const { closeModal } = useModal();

  const handleClick = e => {
    closeModal(e);
  };

  return (
    <div className={css.wrapper}>
      <Title className={css.title}>Email Verification</Title>
      <p className={css.text}>
        Please verify your email address by clicking the link sent to:{' '}
        <span>{email}</span>
      </p>
      <Button className={css.closeBtn} onClick={handleClick}>
        Close window
      </Button>
    </div>
  );
};

export default SuccessfullySendEmail;
