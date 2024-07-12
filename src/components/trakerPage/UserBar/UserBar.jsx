// import css from './UserBar.module.css'
import { Button } from "shared";

const UserBar = ({ userName, avatarUrl, openUserBarPopover }) => {
  return (
    <button className={css.userBar} onClick={openUserBarPopover}>
      <span className={css.userName}>{userName}</span>
      <img src={avatarUrl} alt="Avatar" className={css.avatar} />
      <svg className={css.chevronDown}><use href="./sprite.svg#icon-chevronDown"></use></svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5 12.5L10 7.5L15 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg> */}
    </button>
  );
};

export default UserBar;
