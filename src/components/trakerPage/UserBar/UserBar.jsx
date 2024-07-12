// import css from './UserBar.module.css'
import { Button } from "shared";

const UserBar = ({ userName, avatarUrl, openUserBarPopover }) => {
  return (
    <button className={css.userBar} onClick={openUserBarPopover}>
      <span className={css.userName}>{userName}</span>
      <img src={avatarUrl} alt="Avatar" className={css.avatar} />
      <svg className={css.chevronDown}><use href="./sprite.svg#icon-chevronDown"></use></svg>
      </button>
  );
};

export default UserBar;
