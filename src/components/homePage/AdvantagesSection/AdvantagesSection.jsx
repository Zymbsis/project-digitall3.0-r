import css from './AdvantagesSection.module.css';

const AdvantagesSection = () => {
  return (
    <div className={css.wrapper}>
      {/* <div className={css.customers}></div>
      <div className={css.advantages}></div> */}
      <img
        srcSet="/img/HomePage/Customers-1x.png 1x, /img/HomePage/Customers-2x.png 2x"
        src="/img/HomePage/Customers-1x.png"
        alt="customers"
        className={css.customers}
      />
      <img
        srcSet="/img/HomePage/Benefits-1x.png 1x, /img/HomePage/Benefits-2x.png 2x"
        src="/img/HomePage/Benefits-1x.png"
        alt="advantages"
        className={css.advantages}
      />
    </div>
  );
};

export default AdvantagesSection;
