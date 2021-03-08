const outline = {
  outline: 'silver dotted 1px',
};

export const sectionStyles = {
  minHeight: '100vh',
  width: '100%',
  padding: '2rem',
  '@media only screen and (min-width: 1200px)': {
    padding: '2rem 5rem',
  },
};

export const headingStyles = {
  fontSize: '4rem',
  textAlign: 'center',
};

export const basicListStyles = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

export const basicButtonStyles = {
  border: 0,
  backgroundColor: 'transparent',
  padding: 0,
  '&:active': {
    ...outline,
  },
  '&:focus': {
    ...outline,
  },
  '&:hover': {
    ...outline,
  },
};