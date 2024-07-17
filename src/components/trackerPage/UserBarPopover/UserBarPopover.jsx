import React, { useCallback, useEffect, useRef } from 'react';
import css from './UserBarPopover.module.css';
import UserSettingsModal from '../../modal/UserSettingsModal/UserSettingsModal';
import LogOutModal from '../../modal/LogOutModal/LogOutModal';
import { useModal } from 'context';
import { Icon, Button } from 'shared';
import clsx from 'clsx';

const UserBarPopover = ({ closePopover, restrictionClick, isOpen }) => {
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
      className={clsx(css.userBarPopover, { [css.visible]: isOpen })}
      ref={popoverRef}
    >
      <Button className={css.settingsButton} onClick={handleSettingsClick}>
        <Icon iconId="icon-settings" />
        <span className={css.btnSetting}>Setting</span>
      </Button>
      <Button className={css.logoutButton} onClick={handleLogOutClick}>
        <Icon iconId="icon-log-out" />
        <span className={css.logoutButton}>Log out</span>
      </Button>
    </div>
  );
};
export default UserBarPopover;
