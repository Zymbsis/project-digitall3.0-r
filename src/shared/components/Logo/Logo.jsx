import css from './Logo.module.css';
import clsx from 'clsx';

const Logo = ({ className }) => {
  return (
    <p className={clsx(css.logo, { [className]: className })}>AquaTrack</p>
  );
};

export default Logo;
