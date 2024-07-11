import clsx from 'clsx';
import css from './Logo.module.css';

const Logo = ({ className }) => {
  return (
    <p className={clsx(css.logo, { [className]: className })}>AquaTrack</p>
  );
};

export default Logo;
