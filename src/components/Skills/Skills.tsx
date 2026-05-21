import { SectionContainer } from '../common/SectionContainer';
import { primarySkills } from './primarySkills.tsx';
import type { PrimarySkill } from './primarySkills.tsx';
import { secondarySkills } from './secondarySkills.tsx';
import type { SecondarySkill } from './secondarySkills.tsx';
import {
  Box,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

export const Skills = () => (
  <SectionContainer id='skills'>
    <Container>
      <Typography component='h2' variant='sectionHeader'>
        Skills
      </Typography>
      <Stack spacing={{ xs: 4, lg: 10 }} direction={{ md: 'row' }}>
        <Box sx={{ width: { xs: '100%', md: '60%' } }}>
          <Typography variant='h3' sx={{ my: 4 }}>
            Languages
          </Typography>
          <Grid container spacing={4}>
            {primarySkills.map(({ icon, title, description }: PrimarySkill) => (
              <Grid key={title} size={{ xs: 12, md: 6 }}>
                <Card
                  elevation={3}
                  sx={{
                    height: '100%',
                    p: 2,
                  }}
                >
                  <Stack
                    direction='row'
                    spacing={1}
                    sx={{
                      alignItems: 'center',
                    }}
                  >
                    {icon}
                    <Typography component='h3' variant='h5' sx={{ py: 1 }}>
                      {title}
                    </Typography>
                  </Stack>
                  <Typography variant='body2'>{description}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '40%' } }}>
          <Stack
            direction='row'
            sx={{ flexWrap: 'wrap', gap: 1, m: 0, p: 0 }}
            component='ul'
          >
            {secondarySkills.map(({ icon, title }: SecondarySkill) => (
              <Chip
                color='primary'
                icon={icon}
                label={
                  <Typography sx={{ color: 'inherit' }} component='span'>
                    {title}
                  </Typography>
                }
                key={title}
                component='li'
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  </SectionContainer>
);
