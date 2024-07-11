import clsx from 'clsx';
import css from './Logo.module.css';
import { useRef } from 'react';

const Logo = ({ className }) => {
  const refRef = useRef();
  return (
    <p className={clsx(css.logo, { [className]: className })} ref={refRef}>
      AquaTrack
    </p>
  );
};

export default Logo;
