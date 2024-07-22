import css from './SuccessfullySendEmail.module.css';

const SuccessfullySendEmail = ({ email }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        An activation email has been successfully sent to your inbox{' '}
        <span>{email}</span>
      </p>
    </div>
  );
};

export default SuccessfullySendEmail;
