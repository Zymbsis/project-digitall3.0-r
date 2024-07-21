import { useSelector } from 'react-redux';
import { selectCountUser } from '../../../../redux/user/selectors.js';
// import blondeWoman from 'image';
// import photo from 'image/index.js';
import css from './CustomersCount.module.css';
const CustomersCounter = () => {
  const countedUsers = useSelector(selectCountUser);

  return (
    <div className={css.customers}>
      <ul className={css.customersPhotos}>
        <li>
          {/* <picture><source srcset=${pathToPhotoWebP} type="image/webp"/><img class="team-modal-img" loading="lazy" src=${pathToPhotoPNG} width="320" height="320" alt=${description} type="image/png"/></picture> */}
          <img
            className={css.customersPhotoOne}
            // srcSet="../img/Customers@1x-1.webp 1x, ../img/Customers@1x-1.png 1x, ../img/Customers@2x-1.webp 2x, ../img/Customers@2x-1.png 2x"
            src={''}
            alt="blonde woman"
          />
        </li>
        <li>
          <img
            className={css.customersPhotoTwo}
            // srcSet="../img/Customers@1x-2.webp 1x, ../img/Customers@1x-2.png 1x, ../img/Customers@2x-2.webp 2x, ../img/Customers@2x-2.png 2x"
            src={''}
            alt="young man"
          />
        </li>
        <li>
          <img
            className={css.customersPhotoThree}
            // srcSet="../img/Customers@1x-3.webp 1x, ../img/Customers@1x-3.png 1x, ../img/Customers@2x-3.webp 2x, ../img/Customers@2x-3.png 2x"
            src={''}
            alt="young woman"
          />
        </li>
      </ul>
      <p className={css.customersText}>
        {countedUsers} <span className={css.customersSpan}>happy</span>{' '}
        customers
      </p>
    </div>
  );
};

export default CustomersCounter;
