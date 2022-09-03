import React from 'react';
import {createUseStyles} from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  container: {
    border: '1px solid #ccc',
    boxShadow: '0 .5rem .0 -.25rem #efefef',
    position: 'relative',
    minHeight: '12.5rem',
    overflow: 'hidden',
    padding: '1rem'
  },
  icon: {
    position: 'absolute',
    right: '2rem',
    top: '-15%',
    opacity: '.15',
    height: '125%',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
  },
  description: {
    margin: '1rem 0',
    lineHeight: '1.5',
  },
});

const Skill = ({id, title, description}) => {
  const styles = useStyles(id);

  return (
    <div className={styles.container}>
      <svg className={styles.icon}>
        <use href={`#${id}`} />
      </svg>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

Skill.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Skill;