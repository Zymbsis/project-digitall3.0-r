import css from './UserBarPopover.module.css'
import UserSettingsModal from "./components/modal/UserSettingsModal/UserSettingsModal";
import LogOutModal from "./components/modal/LogOutModal/LogOutModal";
import { useState } from "react";
import { Icon } from 'icons';

const UserBarPopover = ({ openUserSettingsModal, openLogOutModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleTogglePopover = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleOutsideClick = (e) => {
    // Перевіряємо, чи клік був за межами UserBarPopover
    if (!e.target.closest('.userBarPopover')) {
      setIsOpen(false);
    }
  };


  return (
    <div className={css.userBarPopover} onClick={handleOutsideClick}>
      <button className={css.settingsButton} onClick={openUserSettingsModal}>
      <Icon iconId="icon-settings"/>
        <span className={css.btnSetting}>Setting</span>
      </button>

      <button className={css.logoutButton} onClick={openLogOutModal}>
      <Icon iconId="icon-log-out"/>
        <span className={css.logoutButton}>Log out</span>
      </button>
    </div>
  );
};

export default UserBarPopover;
