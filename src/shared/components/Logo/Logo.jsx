import css from './Logo.module.css';
import clsx from 'clsx';

const Logo = ({ className }) => {
  return (
    <a
      href="/project-digitall3.0-r/"
      className={clsx(css.logo, { [className]: className })}
    >
      AquaTrack
    </a>
  );
};

export default Logo;
