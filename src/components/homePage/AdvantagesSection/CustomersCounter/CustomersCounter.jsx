import { useSelector } from 'react-redux';
import { selectCountUser } from '../../../../redux/user/selectors.js';
import CustomerPhoto from '../CustomerPhoto/CustomerPhoto.jsx';

import css from './CustomersCounter.module.css';

const CustomersCounter = () => {
  const countedUsers = useSelector(selectCountUser);

  return (
    <div className={css.customersWrapper}>
      <ul className={css.customerList}>
        <CustomerPhoto photoNumber={1} description="blonde woman" />
        <CustomerPhoto photoNumber={2} description="young man" />
        <CustomerPhoto photoNumber={3} description="young woman" />
      </ul>
      <p className={css.customersText}>
        Our {countedUsers} <span>happy</span>{' '}
        <span className={css.span}>customers</span>
      </p>
    </div>
  );
};

export default CustomersCounter;
