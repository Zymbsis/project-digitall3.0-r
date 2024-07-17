import css from './UserBar.module.css';
import { useState, useRef, useEffect } from 'react';
import UserBarPopover from '../UserBarPopover/UserBarPopover';
import { Button, Icon } from 'shared';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/user/selectors';
import clsx from 'clsx';

const UserBar = () => {
  const { name, avatar } = useSelector(selectCurrentUser);
  const [isOpen, setIsOpen] = useState(false);

  const popoverRef = useRef();
  const handleClosePopover = () => {
    setIsOpen(!isOpen);
  };
  // const handleTogglePopover = () => {
  //   setIsOpen(!isOpen);
  // };
  // const handleOutsideClick = e => {
  //   if (popoverRef.current && !popoverRef.current.contains(e.target)) {
  //     setIsOpen(false);
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener('mousedown', handleOutsideClick);
  //   return () => {
  //     document.removeEventListener('mousedown', handleOutsideClick);
  //   };
  // }, []);
  return (
    <div className={css.userBarContainer}>
      <div className={css.userBarWrapper}>
        <span className={css.userName}>{name}</span>
        <img src={avatar} alt="User Avatar" className={css.avatar} />
        <button
          className={clsx(css.userBarButton, { [css.openPopover]: isOpen })}
          onClick={handleClosePopover}
          type="button"
        >
          <Icon iconId="icon-chevron-down" className={css.userBarIcon} />
        </button>
      </div>
      {isOpen && <UserBarPopover ref={popoverRef} />}
    </div>
  );
};
export default UserBar;
