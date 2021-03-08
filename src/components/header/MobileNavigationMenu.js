import React, {useState} from 'react';
import {createUseStyles} from 'react-jss';
import {basicListStyles, basicButtonStyles} from '../../styles/shared-styles';
import navigationItemsData from './navigation-items-data';
import MenuIcon from '../../icons/menu.svg';
import CloseIcon from '../../icons/close.svg';

const useStyles = createUseStyles({
  menuButton: {
    ...basicButtonStyles,
  },
  closeButton: {
    ...basicButtonStyles,
    display: 'block',
    marginRight: 0,
    marginLeft: 'auto',
  },
  icon: {
    width: '2rem',
    height: '2rem',
  },
  overlay: {
    position: 'fixed',
    zIndex: '100',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(117, 173, 212, .95)',
    padding: '2rem',
    left: 0,
    top: 0,
  },
  list: {
    ...basicListStyles,
  },
  link: {
    color: '#0A72BA',
    textDecoration: 'inherit',
    padding: '1rem',
    textAlign: 'center',
    display: 'block',
    fontSize: '4rem',
  },
});

const MobileNavigationMenu = () => {
  const styles = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => setIsOpen(!isOpen);

  return (
    <>
      <button className={styles.menuButton} type='button' onClick={toggleMenu}>
        <svg className={styles.icon}>
          <use href={`#${MenuIcon.id}`} />
        </svg>
      </button>
      {isOpen &&
        <div className={styles.overlay}>
          <button onClick={toggleMenu} className={styles.closeButton}>
            <svg className={styles.icon}>
              <use href={`#${CloseIcon.id}`} />
            </svg>
          </button>
          <ul className={styles.list}>
            {navigationItemsData.map((item, index) =>
              <li key={index}>
                <a className={styles.link} href={`#${item.id}`} onClick={toggleMenu}>{item.label}</a>
              </li>
            )}
          </ul>
        </div>
      }
    </>
  );
};

export default MobileNavigationMenu;