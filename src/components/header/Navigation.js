import React from 'react';
import {createUseStyles} from 'react-jss';
import DesktopNavigationMenu from './DesktopNavigationMenu';
import MobileNavigationMenu from './MobileNavigationMenu';

const useStyles = createUseStyles({
  container: {
    fontSize: '1.125rem',
    color: 'white',
    fontWeight: 700,
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  mobileNav: {
    '@media only screen and (min-width: 680px)': {
      display: 'none',
    },
  },
  desktopNav: {
    display: 'none',
    '@media only screen and (min-width: 680px)': {
      display: 'block',
    },
  },
});

const Navigation = () => {
  const styles = useStyles();

  return (
    <nav className={styles.container}>
      <div className={styles.mobileNav}>
        <MobileNavigationMenu />
      </div>
      <div className={styles.desktopNav}>
        <DesktopNavigationMenu />
      </div>
    </nav>
  );
};

export default Navigation;