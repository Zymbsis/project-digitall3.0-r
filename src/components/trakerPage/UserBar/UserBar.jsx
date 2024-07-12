import css from './UserBar.module.css'
import { Icon } from 'icons';

const UserBar = ({ userName, avatarUrl, openUserBarPopover }) => {
  return (
    <button className={css.userBar} onClick={openUserBarPopover}>
      <span className={css.userName}>{userName}</span>
      <img src={avatarUrl} alt="Avatar" className={css.avatar} />
      <Icon iconId="icon-chevronDown"/>
      </button>
  );
};

export default UserBar;
