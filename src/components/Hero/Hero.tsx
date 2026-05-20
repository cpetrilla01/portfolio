import { SectionContainer } from '../common/SectionContainer';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import heroImage from '../../../assets/development.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
        <Stack spacing={2} direction='row'>
          <IconButton
            href='https://www.linkedin.com/in/cpetrilla01/'
            target='_blank'
            sx={{ color: 'inherit', padding: '1rem' }}
          >
            <FontAwesomeIcon size='2xl' icon={faLinkedin} />
          </IconButton>
          <IconButton
            href='https://github.com/cpetrilla01'
            target='_blank'
            sx={{ color: 'inherit', padding: '1rem' }}
          >
            <FontAwesomeIcon size='2xl' icon={faGithub} />
          </IconButton>
        </Stack>
      </Box>
      <Box sx={{ maxWidth: { xs: '500px', md: '800px' } }}>
        <img src={heroImage} style={{ maxWidth: '100%' }} alt='' />
      </Box>
    </Stack>
  </SectionContainer>
);
