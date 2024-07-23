import { useDispatch, useSelector } from 'react-redux';
import { selectCountUser } from '../../../../redux/user/selectors.js';
import { images } from 'image';
import css from './CustomersCount.module.css';
import { useEffect } from 'react';
import { countUsers } from '../../../../redux/user/operations.js';

const CustomersCounter = () => {
  const countedUsers = useSelector(selectCountUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countUsers());
  }, [dispatch]);

  return (
    <div className={css.customers}>
      <ul className={css.customersPhotos}>
        <li>
          <img
            className={css.customersPhotoOne}
            loading="lazy"
            srcSet={`
      ${images.customers_1x_1_webp} 1x,
      ${images.customers_1x_1_png} 1x,
      ${images.customers_2x_1_webp} 2x,
      ${images.customers_2x_1_png} 2x
    `}
            src={images.customers_1x_1_png}
            alt="blonde woman"
          />
        </li>
        <li>
          <img
            className={css.customersPhotoTwo}
            loading="lazy"
            srcSet={`
      ${images.customers_1x_2_webp} 1x,
      ${images.customers_1x_2_png} 1x,
      ${images.customers_2x_2_webp} 2x,
      ${images.customers_2x_2_png} 2x
    `}
            src={images.customers_1x_2_png}
            alt="young man"
          />
        </li>
        <li>
          <img
            className={css.customersPhotoThree}
            loading="lazy"
            srcSet={`
      ${images.customers_1x_3_webp} 1x,
      ${images.customers_1x_3_png} 1x,
      ${images.customers_2x_3_webp} 2x,
      ${images.customers_2x_3_png} 2x
    `}
            src={images.customers_1x_3_png}
            alt="young woman"
          />
        </li>
      </ul>
      <p className={css.customersText}>
        {countedUsers ? countedUsers : 'Our'}{' '}
        <span className={css.customersSpan}>happy</span> customers
      </p>
    </div>
  );
};

export default CustomersCounter;
