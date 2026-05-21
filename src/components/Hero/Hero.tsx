import { SectionContainer } from '../common/SectionContainer';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import heroImage from '../../images/development.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

interface IconLinkProps {
  'aria-label': string;
  href: string;
  children: React.ReactNode;
}

const IconLink = ({ children, ...props }: IconLinkProps) => (
  <IconButton
    target='_blank'
    sx={{ color: 'inherit', padding: '1rem' }}
    {...props}
  >
    {children}
  </IconButton>
);

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
          <IconLink
            aria-label='Visit my LinkedIn profile (opens in a new window)'
            href='https://www.linkedin.com/in/cpetrilla01/'
          >
            <FontAwesomeIcon size='2xl' icon={faLinkedin} />
          </IconLink>
          <IconLink
            aria-label='Visit my GitHub profile (opens in a new window)'
            href='https://github.com/cpetrilla01'
          >
            <FontAwesomeIcon size='2xl' icon={faGithub} />
          </IconLink>
        </Stack>
      </Box>
      <Box sx={{ maxWidth: { xs: '500px', md: '800px' } }}>
        <img src={heroImage} style={{ maxWidth: '100%' }} alt='' />
      </Box>
    </Stack>
  </SectionContainer>
);
