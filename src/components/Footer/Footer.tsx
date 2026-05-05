import { Box, Link, Typography } from '@mui/material';

const currentYear = new Date().getFullYear();

export const Footer = () => (
  <Box
    sx={{ backgroundColor: 'secondary.main', color: 'white', padding: 3 }}
    component='footer'
  >
    <Typography sx={{ color: 'inherit', textAlign: 'center' }} variant='body2'>
      &copy;{currentYear} Christopher Petrilla. Hosted by{' '}
      <Link
        sx={{ color: 'inherit' }}
        href='https://pages.github.com/'
        target='_blank'
      >
        GitHub Pages
      </Link>
      .
    </Typography>
  </Box>
);
