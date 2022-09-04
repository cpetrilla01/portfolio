import React from 'react';
import {
  Box,
  Link,
  Typography,
} from '@mui/material';

const Footer = () => (
  <Box
    component='footer'
    sx={{
      backgroundColor: 'secondary.main',
      color: 'white',
      p: 3,
    }}
  >
    <Typography
      variant='body2'
      sx={{
        color: 'inherit',
        textAlign: 'center'
      }}
    >
      &copy;2021 Christopher Petrilla. Hosted by <Link sx={{color: 'inherit'}} href='https://pages.github.com/' target='_blank'>GitHub Pages</Link>. Most icons provided by <Link sx={{color: 'inherit'}} href='https://icons8.com/' target='_blank'>icons8</Link>.
    </Typography>
  </Box>
);

export {Footer};