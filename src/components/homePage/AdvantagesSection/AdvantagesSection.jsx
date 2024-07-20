import clsx from 'clsx';
import css from './AdvantagesSection.module.css';
import CustomersCounter from './CustomersCounter/CustomersCount';
import Advantages from './Advantages/Advantages';

const AdvantagesSection = ({ className }) => {
  return (
    <div className={clsx(css.wrapper, css[className])}>
      <CustomersCounter />
      <Advantages />
    </div>
  );
};

export default AdvantagesSection;
