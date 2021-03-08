import React from 'react';
import {createUseStyles} from 'react-jss';
import {basicListStyles} from '../../styles/shared-styles';
import navigationItemsData from './navigation-items-data';

const useStyles = createUseStyles({
  list: {
    ...basicListStyles,
  },
  listItem: {
    display: 'inline-block',
    padding: '0 .5em',
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      paddingRight: 0,
    },
  },
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
    padding: '.5em',
  },
});

const DesktopNavigationMenu = () => {
  const styles = useStyles();

  return (
    <ul className={styles.list}>
      {navigationItemsData.map((item, index) =>
        <li className={styles.listItem} key={index}>
          <a className={styles.link} href={`#${item.id}`}>{item.label}</a>
        </li>
      )}
    </ul>
  );
};

export default DesktopNavigationMenu;