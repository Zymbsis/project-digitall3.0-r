import css from './UserPanel.module.css';
import React from 'react';
import UserBar from './UserBar';
import { useSelector } from 'react-redux';

const UserPanel = ( ) => {
  const userName =useSelector((state) => state.user.name);
  const avatar=useSelector((state)=> state.user.avatar);
  return (
    <div className={css.userPanel}>
      <h2>
        className={css.helloTitle} Hello,
        <span className={css.userNameHello}>{userName}!</span>
      </h2>
      <UserBar userName={userName} avatar={avatar} />
    </div>
  );
};
export default UserPanel;
