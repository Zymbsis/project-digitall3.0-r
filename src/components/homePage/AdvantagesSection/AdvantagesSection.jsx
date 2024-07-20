import clsx from 'clsx';
import css from './AdvantagesSection.module.css';
import { selectCountUser } from '../../../redux/user/selectors.js';
import { useSelector } from 'react-redux';

const AdvantagesSection = ({ className }) => {
  const countedUsers = useSelector(selectCountUser);

  return (
    <div className={clsx(css.wrapper, css[className])}>
      <div className={css.customers}>
        <ul>
          <li>
            <img
              class={css.customersPhoto}
              // srcset="../img/homePage/customers/Customers@1x-1.png 1x, ./public/img/homePage/customers/Customers@2x-1.webp 2x, ./public/img/homePage/customers/Customers@2x-1.png 2x"
              src="/public/img/homePage/customers/Customers@1x-1.webp"
              alt="blonde woman"
            />
          </li>
          <li>
            <img
              class={css.customersPhoto}
              srcset="/public/img/homePage/customers/Customers@1x-1.png 1x, /public/img/homePage/customers/Customers@2x-1.png 2x"
              src="/public/img/homePage/customers/Customers@1x-1.webp"
              alt="young man"
            />
          </li>
          <li>
            <img
              class={css.customersPhoto}
              srcset="/public/img/homePage/customers/Customers@1x-1.png 1x, /public/img/homePage/customers/Customers@2x-1.png 2x"
              src="/public/img/homePage/customers/Customers@1x-1.webp"
              alt="young woman"
            />
          </li>
        </ul>
        {/* <div className={css.customersPhotos}>
          <div className={css.customersPhotoOne}></div>
          <div className={css.customersPhotoTwo}></div>
          <div className={css.customersPhotoThree}></div>
        </div> */}
        <p className={css.customersText}>
          {countedUsers} <span className={css.customersSpan}>happy</span>{' '}
          customers
        </p>
      </div>
      <div className={css.advantages}>
        <div className={css.habit}>
          <div className={css.dot}></div>
          <p className={css.habitText}>Habit drive</p>
        </div>
        <div className={css.statistics}>
          <p className={css.statisticsText}>View statistics</p>
        </div>
        <div className={css.rate}>
          <p className={css.rateText}>Personal rate setting</p>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
