import React from 'react';
import {
  Box,
  Link,
  Typography,
} from '@mui/material';

const Footer = () => (
  <Box
    bgcolor='secondary.main'
    color='white'
    component='footer'
    p={3}
  >
    <Typography
      color='inherit'
      textAlign='center'
      variant='body2'
    >
      &copy;2021 Christopher Petrilla. Hosted by <Link sx={{color: 'inherit'}} href='https://pages.github.com/' target='_blank'>GitHub Pages</Link>. Most icons provided by <Link sx={{color: 'inherit'}} href='https://icons8.com/' target='_blank'>icons8</Link>.
    </Typography>
  </Box>
);

export {Footer};