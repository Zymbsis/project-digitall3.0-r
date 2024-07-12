import clsx from 'clsx';
import css from './Title.module.css';

const Title = ({ children, className }) => {
  return (
    <h2 className={clsx(css.title, { [className]: className })}>{children}</h2>
  );
};

export default Title;
