import css from './UserBar.module.css';
import { useState, useRef, useEffect } from 'react';
import UserBarPopover from '../UserBarPopover/UserBarPopover';
import { Button } from 'shared';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/user/selectors';

const UserBar = () => {
  const { name, avatar } = useSelector(selectCurrentUser);

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
        <span className={css.UserName}>{name}</span>
        <img src={avatar} alt="User Avatar" className={css.avatar} />
      </Button>
      {isOpen && <UserBarPopover ref={popoverRef} />}
    </div>
  );
};
export default UserBar;
