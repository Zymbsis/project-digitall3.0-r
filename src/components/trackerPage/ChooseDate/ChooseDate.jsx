import css from './ChooseDate.module.css';

const ChooseDate = () => {
  // const formatDate = dateString => {
  //   const options = { day: 'numeric', month: 'long' };
  //   const date = new Date(dateString);
  //   return date.toLocaleString('en-US', options);
  // };

  // const formattedDate = formatDate('2025-03-01');
  // console.log(formattedDate);

  return <h3 className={css.chooseDateTitle}>Today</h3>;
};

export default ChooseDate;
