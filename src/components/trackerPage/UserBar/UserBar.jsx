import css from './UserBar.module.css'
import { useState, useRef, useEffect } from 'react';
import UserBarPopover from './UserBarPopover';
import { Button } from 'shared';

const UserBar = ({ userName, avatar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef();
  const handleTogglePopover = () => {
    setIsOpen(!isOpen);
  };
  const handleOutsideClick = e => {
    if (popoverRef.current && !popoverRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
    <div className={css.userBarContainer}>
      <Button className={css.userBarButton} onClick={handleTogglePopover}>
        <img src={avatar} alt="User Avatar" className={css.avatar} />
        <span className={css.UserName}>{userName}Nadiya</span>
      </Button>
      {isOpen && <UserBarPopover ref={popoverRef} />}
    </div>
  );
};
export default UserBar;



