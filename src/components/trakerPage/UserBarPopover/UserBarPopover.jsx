// import css from './UserBarPopover.module.css'
import UserSettingsModal from "components/modal/UserSettingsModal/UserSettingsModal";
import LogOutModal from "components/modal/LogOutModal/LogOutModal";

const UserBarPopover = ({ openUserSettingsModal, openLogOutModal }) => {
  return (
    <div className={css.userBarPopover}>
      <button className={css.settingsButton} onClick={openUserSettingsModal}>
      <svg className={css.iconSetting}><use href="./sprite.svg#icon-settings"></use></svg>
        <span className={css.btnSetting}>Setting</span>
      </button>

      <button className={css.logoutButton} onClick={openLogOutModal}>
      <svg className={css.iconLogOut}><use href="./sprite.svg#icon-log-out" width='16' height='16'></use></svg>
        <span className={css.logoutButton}>Log out</span>
      </button>
    </div>
  );
};

export default UserBarPopover;
