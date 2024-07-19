import clsx from 'clsx';
import css from './AuthFormLayout.module.css';

const AuthFormLayout = ({ children, className }) => {
  return (
    <div className={clsx(css.layout, { [className]: className })}>
      {children}
    </div>
  );
};

export default AuthFormLayout;
