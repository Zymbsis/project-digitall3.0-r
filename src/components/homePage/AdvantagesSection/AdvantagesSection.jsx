import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { countUsers } from '../../../redux/user/operations';
import CustomersCounter from './CustomersCounter/CustomersCounter';
import AdvantageList from './AdvantageList/AdvantageList';

import clsx from 'clsx';
import css from './AdvantagesSection.module.css';

const AdvantagesSection = ({ className }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countUsers());
  }, [dispatch]);

  return (
    <div className={clsx(css.wrapper, css[className])}>
      <CustomersCounter />
      <AdvantageList />
    </div>
  );
};

export default AdvantagesSection;
