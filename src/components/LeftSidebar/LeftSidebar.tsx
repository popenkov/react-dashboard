import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

//user export
import { leftSidebarData } from '../../data/data';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Menu } from '../../assets/svg/hamburger.svg';
import { ReactComponent as File } from '../../assets/svg/file.svg';
import { ReactComponent as Grid } from '../../assets/svg/grid.svg';
import { ReactComponent as Signal } from '../../assets/svg/signal.svg';
import { ReactComponent as Wallet } from '../../assets/svg/wallet.svg';
import { ReactComponent as Settings } from '../../assets/svg/settings.svg';
import { ReactComponent as Logout } from '../../assets/svg/logout.svg';
import styles from './LeftSidebar.module.scss';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import useMediaQuery from '../../hooks/useMediaQuery';

const iconsByAlias: any = {
  File: File,
  Grid: Grid,
  Signal: Signal,
  Wallet: Wallet,
};

const LeftSidebar = () => {
  const isAdaptive = useMediaQuery('(max-width: 992px)');
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(false);

  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-320px',
    },
  };

  const handleCloseMenu = () => {
    isAdaptive && setExpaned(false);
  };

  return (
    <>
      <div
        className={styles.bars}
        style={expanded ? { left: '270px' } : { left: '5%' }}
        onClick={() => setExpaned(!expanded)}
      >
        <Menu />
      </div>
      <motion.div
        className={styles.sidebar}
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.menuContainer}>
          <nav className={styles.menu}>
            {leftSidebarData.map((item, index) => {
              const Icon: React.FunctionComponent = iconsByAlias[item.icon];
              return (
                <Link
                  to={item.link}
                  className={clsx(styles.menuItem, {
                    [styles.active]: selected === index,
                  })}
                  key={index}
                  onClick={() => {
                    setSelected(index);
                    handleCloseMenu();
                  }}
                >
                  <Icon />
                  <span className={styles.text}>{item.heading}</span>
                </Link>
              );
            })}
          </nav>

          <div className={styles.settingsMenu}>
            <Link to="/settings" className={styles.menuItem}>
              <Settings />
              <span className={styles.text}>Settings</span>
            </Link>
            <div className={styles.menuItem}>
              <Logout />
              <span className={styles.text}>Login</span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LeftSidebar;
