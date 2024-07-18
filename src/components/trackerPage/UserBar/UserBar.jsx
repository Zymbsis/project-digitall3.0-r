import css from './UserBar.module.css';
import { useState, useRef } from 'react';
import UserBarPopover from '../UserBarPopover/UserBarPopover';
import { Icon } from 'shared';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/user/selectors';
import clsx from 'clsx';

const UserBar = () => {
  const { name, avatar } = useSelector(selectCurrentUser);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  const handleTogglePopover = () => {
    if (isOpen === false) {
      setIsOpen(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 0);
    } else {
      setIsVisible(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
  };
  const handleClosePopover = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };
  const restrictionClick = e => {
    return buttonRef.current && buttonRef.current.contains(e.target);
  };

  return (
    <div className={css.userBarContainer}>
      <div className={css.userBarWrapper}>
        <span className={css.userName}>{name}</span>
        <img
          src={
            avatar
              ? avatar
              : 'https://res.cloudinary.com/dvkqniafr/image/upload/v1721220091/kotik_vae38k.jpg'
          }
          alt="User Avatar"
          className={css.avatar}
        />
        <button
          ref={buttonRef}
          className={clsx(css.userBarButton, { [css.openPopover]: isVisible })}
          onClick={handleTogglePopover}
          type="button"
        >
          <Icon iconId="icon-chevron-down" className={css.userBarIcon} />
        </button>
      </div>

      {isOpen && (
        <UserBarPopover
          closePopover={handleClosePopover}
          restrictionClick={restrictionClick}
          setIsVisible={setIsVisible}
          isVisible={isVisible}
        />
      )}
    </div>
  );
};
export default UserBar;
