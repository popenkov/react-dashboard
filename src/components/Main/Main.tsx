import styles from './Main.module.scss';

import MainHeader from '../MainHeader/MainHeader';
import Summary from '../Summary/Summary';

function Main() {
  return (
    <div className={styles.main}>
      <MainHeader />
      <div className={styles.mainContainer}>
        <div className={styles.center}>
          <Summary />

          <div className={styles.report}>
            <h3>Analitcs Report</h3>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
      Main
    </div>
  );
}

export default Main;
