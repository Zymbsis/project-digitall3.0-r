import { images } from 'image';

import css from './CustomerPhoto.module.css';

const CustomerPhoto = ({ photoNumber, description }) => {
  return (
    <li className={css.customerItem}>
      <img
        loading="lazy"
        srcSet={`
      ${images[`customers_1x_${photoNumber}_webp`]} 1x,
      ${images[`customers_1x_${photoNumber}_png`]} 1x,
      ${images[`customers_2x_${photoNumber}_webp`]} 2x,
      ${images[`customers_2x_${photoNumber}_png`]} 2x
    `}
        src={images.customers_1x_1_png}
        alt={description}
        width={47}
        height={47}
      />
    </li>
  );
};

export default CustomerPhoto;
