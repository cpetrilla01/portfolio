import { SectionContainer } from '../common/SectionContainer';
import { Typography } from '@mui/material';

export const Hero = () => (
  <SectionContainer
    sx={{
      alignItems: 'center',
      backgroundColor: 'primary.light',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Typography color='inherit' variant='subtitle1'>
      I build enterprise-level Javascript apps
    </Typography>
  </SectionContainer>
);
