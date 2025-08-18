import { Avatar, Container, Grid, Link, Typography } from '@mui/material';
import { SectionContainer } from '../common/SectionContainer';
import Me from '../../images/me.jpg';

export const About = () => (
  <SectionContainer id='about'>
    <Container>
      <Typography component='h2' variant='sectionHeader'>
        About
      </Typography>
      <Grid
        container
        direction='row-reverse'
        justifyContent='center'
        spacing={4}
      >
        <Grid size={{ md: 6, xs: 12 }}>
          <Avatar
            alt='Me with South Philly in the background'
            src={Me}
            sx={{
              height: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '500px',
              width: '100%',
            }}
          />
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Typography variant='body1'>
            I'm a full-stack engineer living in Philadelphia, PA. I have over
            twelve years of professional experience with an emphasis on
            front-end development. Over my career, I've evolved into a
            full-stack JavaScript developer.
          </Typography>
          <Typography variant='body1'>
            Currently, I'm a full-time employee with Signant Health, building
            software that facilitates clinical trials. At Signant Health, I
            helped develop front-end standards of excellence to align multiple
            products under a greenfield project. I also heavily contributed to a
            company-wide React component library, which is currently used across
            these apps.
          </Typography>
          <Typography variant='body1'>
            Previously, I worked with Elsevier, a medical publishing company,
            for over eight years. During that time, I contributed to each of the
            ClinicalKey applications: Physician, Nursing, Student, and CK Now.
            Prior to Elsevier, I worked at the University of Delaware,
            contributing to their core web business systems.
          </Typography>
          <Typography variant='body1'>
            I love development, but I like to round out my career with personal
            interests: watching movies, reading, learning photography,
            traveling, exploring Japan when I'm able, and finding my next
            favorite coffee and whiskey 😉.
          </Typography>
          <Typography variant='body1'>
            If you'd like to learn more about me or my experience, or if you'd
            like to connect, find me on{' '}
            <Link href='https://www.github.com/cpetrilla01' target='_blank'>
              GitHub
            </Link>{' '}
            or{' '}
            <Link
              href='https://www.linkedin.com/in/cpetrilla01/'
              target='_blank'
            >
              LinkedIn
            </Link>
            .
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </SectionContainer>
);
