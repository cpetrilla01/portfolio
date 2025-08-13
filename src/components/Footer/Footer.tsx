import { Box, Link, Typography } from '@mui/material';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <Box bgcolor='secondary.main' color='white' component='footer' p={3}>
    <Typography color='inherit' textAlign='center' variant='body2'>
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

export { Footer };
