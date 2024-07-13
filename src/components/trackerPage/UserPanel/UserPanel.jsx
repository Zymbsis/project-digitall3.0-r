import css from './UserPanel.module.css'

import { useState } from 'react';
import UserBar from '../UserBar/UserBar';
import UserBarPopover from '../UserBarPopover/UserBarPopover';

const UserPanel = ({ userName, avatarUrl }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const openUserBarPopover = () => {
    setIsPopoverOpen(true);
  };

  const closeUserBarPopover = () => {
    setIsPopoverOpen(false);
  };

  return (
    <div className={css.userPanel}>
      <h2> className={css.helloTitle} Hello,<span className={css.userNameHello}>{userName}!</span></h2>
      <UserBar userName={userName} avatarUrl={avatarUrl} openUserBarPopover={openUserBarPopover} />
      {isPopoverOpen && <UserBarPopover closeUserBarPopover={closeUserBarPopover} />}
    </div>
  );
};

export default UserPanel;
