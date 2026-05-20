import { SectionContainer } from '../common/SectionContainer';
import { Box, Stack, Typography } from '@mui/material';
import heroImage from '../../../assets/development.png';

export const Hero = () => (
  <SectionContainer
    sx={{
      backgroundColor: 'primary.light',
      color: 'white',
    }}
  >
    <Stack
      spacing={10}
      direction={{ md: 'row' }}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ maxWidth: '500px' }}>
        <Typography sx={{ color: 'inherit' }} variant='subtitle1'>
          Hi, I'm Chris!
        </Typography>
        <Typography sx={{ color: 'inherit' }} variant='body1'>
          I'm a <strong>front-end software engineer</strong> with over 12 years
          of experience. I build TypeScript/JavaScript-based web applications
          using modern development frameworks and tools—primarily React, Vite,
          React Testing Library, and Vitest. I also have experience with
          back-end development through NodeJS.
        </Typography>
      </Box>
      <Box>
        <img src={heroImage} style={{ maxWidth: '100%' }} alt='' />
      </Box>
    </Stack>
  </SectionContainer>
);
