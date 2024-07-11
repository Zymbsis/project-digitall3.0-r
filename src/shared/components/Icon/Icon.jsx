import clsx from 'clsx';
import css from './Icon.module.css';
import { icon } from 'icons';

const Icon = ({ iconId, className, ...props }) => {
  return (
    <svg
      className={clsx(css.icon, { [className]: className })}
      role="img"
      {...props}
    >
      <use xlinkHref={`${icon}#${iconId}`} />
    </svg>
  );
};

export default Icon;

//Наприклад <Icon iconId="icon-eye-off" />
