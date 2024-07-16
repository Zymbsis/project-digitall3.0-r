import React from 'react';
import css from './UserBarPopover.module.css';
import UserSettingsModal from '../../modal/UserSettingsModal/UserSettingsModal';
import LogOutModal from '../../modal/LogOutModal/LogOutModal';
import { useModal } from 'context';
import { Icon, Button } from 'shared';

const UserBarPopover = React.forwardRef((props, ref) => {
  const { openModal } = useModal();

  const handleSettingsClick = () => {
    openModal(<UserSettingsModal />);
  };

  const handleLogOutClick = () => {
    openModal(<LogOutModal />);
  };

  return (
    <div className={css.userBarPopover} ref={ref}>
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
});
export default UserBarPopover;
