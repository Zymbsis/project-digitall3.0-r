import css from './UserPanel.module.css';
import React from 'react';
import UserBar from '../UserBar/UserBar';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/user/selectors';
import { Button } from 'shared';
import { useTour } from '@reactour/tour';

const UserPanel = () => {
  const { name } = useSelector(selectCurrentUser);
  const { setIsOpen } = useTour();

  return (
    <div className={css.userPanel}>
      <h2 className={css.helloTitle}>
        Hello, <span className={css.userNameHello}>{name}!</span>
      </h2>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Start Tour
      </Button>
      <UserBar />
    </div>
  );
};
export default UserPanel;
