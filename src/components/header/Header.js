import React from 'react';
import Wordmark from './Wordmark';
import Navigation from './Navigation';
import {createUseStyles} from 'react-jss';
import {sectionStyles} from '../../styles/shared-styles';

const useStyles = createUseStyles({
  container: {
    ...sectionStyles,
    minHeight: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'absolute',
    color: 'white',
  },
});

const Header = () => {
  const styles = useStyles();

  return (
    <header className={styles.container}>
      <div>
        <Wordmark />
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;