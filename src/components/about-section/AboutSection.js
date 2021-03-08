import React from 'react';
import {createUseStyles} from 'react-jss';
import {headingStyles, sectionStyles} from '../../styles/shared-styles.js';
import Me from '../../images/me.jpg';

const useStyles = createUseStyles({
  container: {
    ...sectionStyles,
    borderTop: '1px dotted silver',
  },
  heading: {
    ...headingStyles,
  },
  flexContainer: {
    '@media only screen and (min-width: 1200px)': {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
  },
  description: {
    fontSize: '1.15rem',
    lineHeight: '1.5',
    maxWidth: '35rem',
    margin: 'auto',
    '@media only screen and (min-width: 1200px)': {
      margin: 0,
    },
  },
  image: {
    borderRadius: '50%',
    margin: 'auto',
    display: 'block',
    padding: '2rem',
    '@media only screen and (min-width: 1200px)': {
      margin: 0,
      paddingLeft: '2rem',
    },
  },
});

const AboutSection = () => {
  const styles = useStyles();

  return (
    <section className={styles.container} id='about'>
      <h3 className={styles.heading}>About</h3>
      <div className={styles.flexContainer}>
        <img src={Me} className={styles.image} alt='Me with the Manhattan skyline in the background' />
        <div className={styles.description}>
          <p>I'm a front-end engineer living in Philadelphia, PA. I have nine years of professional experience with front-end engineering and development, but my personal interest in the field began with my first GeoCities fan page in 1997.</p>
          <p>Currently, I'm front-end engineer with Elsevier, a medical publishing company. I've been with Elsevier for seven years, and during that time, I've progressed from a junior- to senior-level role, contributing to each of the ClinicalKey applications: Physician, Nursing, Student, and most recently, CK Now.</p>
          <p>Before Elsevier, I worked with the University of Delaware as a Web developer. I focused on building interactive Web applications, but my role also included requirements gathering, QA, and some project management.</p>
          <p>I love development, but I like to round out my career with personal interests: watching movies, reading, learning photography, traveling, and experiencing Japanese food and language... and drinking whiskey 😄.</p>
          <p>If you'd like to connect, find me on <a href='https://www.github.com/cmpetrilla' target='_blank'>GitHub</a> or <a href='https://www.linkedin.com/in/cmpetrilla/' target='_blank'>LinkedIn</a>.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;