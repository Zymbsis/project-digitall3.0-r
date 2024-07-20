import css from './UserPanel.module.css';
import React from 'react';
import UserBar from '../UserBar/UserBar';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/user/selectors';

const UserPanel = () => {
  const { name } = useSelector(selectCurrentUser);

  return (
    <div className={css.userPanel}>
      <h2 className={css.helloTitle}>
        Hello, <span className={css.userNameHello}>{name}!</span>
      </h2>
      <UserBar />
    </div>
  );
};
export default UserPanel;
