import React from 'react';
import {createUseStyles} from 'react-jss';
import {sectionStyles} from '../../styles/shared-styles';

const useStyles = createUseStyles({
  container: {
    ...sectionStyles,
    color: 'white',
    backgroundColor: '#0A72BA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hero: {
    fontSize: '4rem',
    '@media only screen and (min-width: 1200px)': {
      textAlign: 'center',
    },
  },
});

const HeroSection = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <p>I build enterprise-level Javascript apps</p>
      </div>
    </div>
  );
};

export default HeroSection;