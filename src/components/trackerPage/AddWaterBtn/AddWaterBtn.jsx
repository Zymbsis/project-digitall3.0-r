import css from './AddWaterBtn.module.css'
import Button from '../shared/Button/Button.jsx';
// import React, { useState } from "react";


// const AddWaterBtn = ({ addWater }) => {
//   const handleClick = () => {
//     addWater();
//   };

//   return (
//     <div className={css.container}>
//       <button type="button" className={css.addWaterBtn} onClick={handleClick}>
//         Add water
//       </button>
//     </div>
//   );
// };

// export default AddWaterBtn;
const AddWaterBtn = ({
  buttonClassName,
  iconClassName,
  spanClassName,
  iconId,
  iconWidth,
  iconHeight,
}) => {
  return (
    <div>
      <Button
        variant=".outline"
        className={`${css.addWaterButton} ${buttonClassName}`}
      >
        <IconPlusWater
          className={`${css.iconPlusWater} ${iconClassName}`}
          iconId={iconId}
          width={iconWidth}
          height={iconHeight}
        />
        <span className={`${css.addWaterSpan} ${spanClassName}`}>
          Add water
        </span>
      </Button>
    </div>
  );
};

export default AddWaterBtn;
