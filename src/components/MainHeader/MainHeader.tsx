import styles from './MainHeader.module.scss';
import { ReactComponent as Bell } from '../../assets/svg/bell.svg';
import { ReactComponent as Message } from '../../assets/svg/message.svg';
import { ReactComponent as Search } from '../../assets/svg/search.svg';
import Profile from '../../assets/images/profile.png';

function MainHeader() {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Dashboard</h2>
      <form className={styles.form}>
        <span className={styles.searchIcon}>
          <Search />
        </span>
        <input
          type="text"
          placeholder="Search for transaction, item, etc"
          className={styles.input}
        />
      </form>
      <div className={styles.headerIcon}>
        <Bell />
      </div>
      <div className={styles.headerIcon}>
        <Message />
      </div>
      <div className={styles.profile}>
        <img src={Profile} className={styles.profileImg} />
      </div>
    </div>
  );
}

export default MainHeader;
