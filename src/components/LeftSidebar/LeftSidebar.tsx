import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

//user export
import { leftSidebarData, LeftSidebarType } from '../../data/data';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Menu } from '../../assets/svg/hamburger.svg';
import { ReactComponent as File } from '../../assets/svg/file.svg';
import { ReactComponent as Grid } from '../../assets/svg/grid.svg';
import { ReactComponent as Signal } from '../../assets/svg/signal.svg';
import { ReactComponent as Wallet } from '../../assets/svg/wallet.svg';
import { ReactComponent as Settings } from '../../assets/svg/settings.svg';
import { ReactComponent as Logout } from '../../assets/svg/logout.svg';
import styles from './LeftSidebar.module.scss';

const iconsByAlias: any = {
  File: File,
  Grid: Grid,
  Signal: Signal,
  Wallet: Wallet,
};

const LeftSidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%',
    },
  };

  return (
    <>
      <div
        className={styles.bars}
        style={expanded ? { left: '60%' } : { left: '5%' }}
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
                <div
                  className={clsx(styles.menuItem, {
                    [styles.active]: selected === index,
                  })}
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  <Icon />
                </div>
              );
            })}
          </nav>

          <div className={styles.settingsMenu}>
            <div className={styles.menuItem}>
              <Settings />
            </div>
            <div className={styles.menuItem}>
              <Logout />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LeftSidebar;
