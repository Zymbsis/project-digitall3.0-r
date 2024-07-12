import css from './WelcomeSection.module.css';
import Logo from 'shared/components/Logo/Logo';

const WelcomeSection = () => {
  return (
    <div className={css.wrapper}>
      <Logo />
      <div className={css.content}>
        <div className={css.description}>
          <p className={css.descriptionParagraph}>
            Record daily water intake and track
          </p>
          <h1 className={css.title}>Water consumption tracker</h1>
        </div>
        <div className={css.buttons}>
          <button type="button" className={css.buttonTryTracker}>
            Try tracker
          </button>
          <button type="button" className={css.buttonSignIn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
