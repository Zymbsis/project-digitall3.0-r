import css from './AdvantagesSection.module.css';

const AdvantagesSection = () => {
  return (
    <div className={css.wrapper}>
      <img
        srcset="../../../../public/img/HomePage/Customers-1x.png 1x, ../../../../public/img/HomePage/Customers-2x.png 2x"
        src="../../../../public/img/HomePage/Customers-1x.png"
        alt="customers"
        className={css.customers}
      />
      <img
        src="../../../../public/img/HomePage/Benefits-1x.png"
        alt="advantages"
        className={css.advantages}
      />
    </div>
  );
};

export default AdvantagesSection;
