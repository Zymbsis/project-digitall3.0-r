import clsx from 'clsx';
import css from './Section.module.css';

const Section = ({ children, className }) => {
  return (
    <section className={clsx(css.section, { [className]: className })}>
      {children}
    </section>
  );
};

export default Section;
