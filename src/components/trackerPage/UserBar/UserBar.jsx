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
  const buttonRef = useRef(null);

  const handleTogglePopover = () => {
    setIsOpen(!isOpen);
  };
  const handleClosePopover = () => {
    setIsOpen(false);
  };
  const restrictionClick = e => {
    return buttonRef.current && buttonRef.current.contains(e.target);
  };

  return (
    <div className={css.userBarContainer}>
      <div className={css.userBarWrapper}>
        <span className={css.userName}>{name}</span>
        <img src={avatar} alt="User Avatar" className={css.avatar} />
        <button
          ref={buttonRef}
          className={clsx(css.userBarButton, { [css.openPopover]: isOpen })}
          onClick={handleTogglePopover}
          type="button"
        >
          <Icon iconId="icon-chevron-down" className={css.userBarIcon} />
        </button>
      </div>

      <UserBarPopover
        closePopover={handleClosePopover}
        restrictionClick={restrictionClick}
        isOpen={isOpen}
      />
    </div>
  );
};
export default UserBar;
