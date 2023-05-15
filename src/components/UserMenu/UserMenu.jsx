import styles from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div>
      <p className={styles.mail}>mango@mail.com</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
