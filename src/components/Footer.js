import React from 'react';
import {createUseStyles} from 'react-jss';
import {sectionStyles} from '../styles/shared-styles';

const useStyles = createUseStyles({
  container: {
    ...sectionStyles,
    minHeight: 0,
    backgroundColor: '#033558',
    color: 'white',
    textAlign: 'center',
    '& a': {
      color: 'inherit',
    }
  },
});

const Footer = () => {
  const styles = useStyles();

  return (
    <footer className={styles.container}>
      <p>&copy;2021 Christopher Petrilla. Hosted by <a href='https://pages.github.com/' target='_blank'>GitHub Pages</a>. Most icons provided by <a href='https://icons8.com/' target='_blank'>icons8</a>.</p>
    </footer>
  );
};

export {Footer};