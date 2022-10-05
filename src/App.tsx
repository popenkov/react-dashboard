import styles from './App.module.scss';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Main from './components/Main/Main';
import RightSidebar from './components/RightSidebar/RightSidebar';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appGlass}>
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
