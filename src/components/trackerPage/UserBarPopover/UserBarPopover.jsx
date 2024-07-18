import React, { useCallback, useEffect, useRef } from 'react';
import css from './UserBarPopover.module.css';
import UserSettingsModal from '../../modal/UserSettingsModal/UserSettingsModal';
import LogOutModal from '../../modal/LogOutModal/LogOutModal';
import { useModal } from 'context';
import { Icon } from 'shared';
import clsx from 'clsx';

const UserBarPopover = ({ closePopover, restrictionClick, isVisible }) => {
  const { openModal } = useModal();
  const popoverRef = useRef(null);

  const handleSettingsClick = () => {
    openModal(<UserSettingsModal />);
    closePopover();
  };
  const handleLogOutClick = () => {
    openModal(<LogOutModal />);
    closePopover();
  };

  const handleOutsideClick = useCallback(
    e => {
      if (restrictionClick(e)) return;
      if (popoverRef.current && popoverRef.current.contains(e.target)) return;
      closePopover();
    },
    [closePopover, restrictionClick]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div
      className={clsx(css.userBarPopover, { [css.visible]: isVisible })}
      ref={popoverRef}
    >
      <button
        className={css.settingsButton}
        onClick={handleSettingsClick}
        type="button"
      >
        <Icon iconId="icon-settings" className={css.settingsIcon} />
        Setting
      </button>
      <button
        className={css.logoutButton}
        onClick={handleLogOutClick}
        type="button"
      >
        <Icon iconId="icon-log-out" className={css.logoutIcon} />
        Log out
      </button>
    </div>
  );
};
export default UserBarPopover;
