import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
// import LeftSidebar from './components/LeftSidebar/LeftSidebar';
// import Main from './components/Main/Main';
// import RightSidebar from './components/RightSidebar/RightSidebar';
import Grid from './pages/Grid';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Wallet from './pages/Wallet';

function App() {
  return (
    // <div className={styles.app}>
    //   <LeftSidebar />
    //   <Main />
    //   {/* <RightSidebar /> */}
    // </div>
    <Router>
      <div className={styles.app}>
        <LeftSidebar />
        <div className={styles.pages}>
          <Routes>
            <Route index element={<Grid />} />
            <Route path="/wallet" element={<Wallet />}></Route>
            <Route path="/tables" element={<Tables />}></Route>
            <Route path="/reports" element={<Reports />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
