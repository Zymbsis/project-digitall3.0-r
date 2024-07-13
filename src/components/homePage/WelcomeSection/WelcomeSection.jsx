import { NavLink } from 'react-router-dom';
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
          <NavLink to="/signup" className={css.buttonTryTracker}>
            Try tracker
          </NavLink>
          <NavLink to="/signin" className={css.buttonSignIn}>
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
