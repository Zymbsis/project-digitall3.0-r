import css from './UserPanel.module.css'
import React from 'react';
import UserBar from './UserBar';

const UserPanel = ({ userName, avatar }) => {
  return (
    <div className={css.userPanel}>
  <h2>className={css.helloTitle} Hello,<span className={css.userNameHello}>{userName}!</span></h2>
      <UserBar userName={userName} avatar={avatar} />
    </div>
  );
};
export default UserPanel;
