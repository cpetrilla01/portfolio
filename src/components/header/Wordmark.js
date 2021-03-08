import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  container: {
    fontSize: '1rem',
    margin: 0,
  },
  name: {
    display: 'block',
    fontSize: '1.125rem',
    fontWeight: 700,
    letterSpacing: '.025em',
    textTransform: 'uppercase',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  title: {
    display: 'block',
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '.02em',
    paddingTop: '.25em;',
  },
});

const Wordmark = () => {
  const styles = useStyles();

  return (
    <h1 className={styles.container}>
      <span className={styles.name}>
        <a className={styles.link} href='/'>Christopher Petrilla</a>
      </span>
      <span className={styles.title}>Front-end engineer</span>
    </h1>
  );
};

export default Wordmark;