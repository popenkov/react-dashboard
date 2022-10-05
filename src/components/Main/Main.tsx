import styles from './Main.module.scss';

import MainHeader from '../MainHeader/MainHeader';
import Summary from '../Summary/Summary';
import Report from '../Report/Report';
import BankAccount from '../BankAccount/BankAccount';

function Main() {
  return (
    <div className={styles.main}>
      <MainHeader />
      <div className={styles.mainContainer}>
        <div className={styles.center}>
          <Summary />

          <Report />
        </div>
        <div className={styles.right}>
          <BankAccount />
        </div>
      </div>
      Main
    </div>
  );
}

export default Main;
