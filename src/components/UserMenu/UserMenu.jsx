import { useDispatch } from 'react-redux';
import { logOutOperation } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p className={styles.mail}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOutOperation())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
