import React from 'react';
import {createUseStyles} from 'react-jss';
import {headingStyles, sectionStyles} from '../../../styles/shared-styles';
import Skill from './Skill';
import skillsListData from './skills-list-data';

const useStyles = createUseStyles({
  container: {
    ...sectionStyles,
  },
  heading: {
    ...headingStyles,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
    margin: 'auto',
    maxWidth: '80rem',
    '@media only screen and (min-width: 780px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    '@media only screen and (min-width: 1340px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
});

const Skills = () => {
  const styles = useStyles();

  return (
    <section className={styles.container} id='skills'>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.grid}>
        {skillsListData.map(({id, title, description}, index) =>
          <Skill description={description} id={id} title={title} key={index} />
        )}
      </div>
    </section>
  );
};

export {Skills};