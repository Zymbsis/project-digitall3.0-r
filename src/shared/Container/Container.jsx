import clsx from 'clsx';
import css from './Container.module.css';

const Container = ({ children, className }) => {
  return (
    <div className={clsx(css.container, { [className]: className })}>
      {children}
    </div>
  );
};

export default Container;
