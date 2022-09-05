import React from 'react';
import {
  Avatar,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import {SectionContainer} from '../SectionContainer';
import Me from '../../../images/me.jpg';

const About = () => (
  <SectionContainer id='about'>
    <Container>
      <Typography
        component='h2'
        variant='sectionHeader'
      >
        About
      </Typography>
      <Grid
        container
        direction='row-reverse'
        justifyContent='center'
        spacing={4}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Avatar
            alt='Me with South Philly in the background'
            src={Me}
            sx={{
              height: 'auto',
              maxWidth: '500px',
              width: '100%',
          }}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            variant='body1'
          >
            I'm a front-end engineer living in Philadelphia, PA. I have over ten years of professional experience with front-end engineering, but my personal interest in the field began with my first GeoCities fan page in 1997.
          </Typography>
          <Typography
            variant='body1'
          >
            Currently, I'm a consultant with A2C, working with a health company that facilitates clinical trials. My current focus is to establish a common paradigm across the various disparate applications that the company has acquired over the years. Going forward, I hope to learn more about micro services architecture (including micro front-ends) and help build a company-wide React-based component library.
          </Typography>
          <Typography
            variant='body1'
          >
            Previously, I worked with Elsevier, a medical publishing company, for over eight years. During that time, I contributed to each of the ClinicalKey applications: Physician, Nursing, Student, and CK Now. Prior to Elsevier, I worked at the University of Delaware, contributing to their core web business systems.
          </Typography>
          <Typography
            variant='body1'
          >
            I love development, but I like to round out my career with personal interests: watching movies, reading, learning photography, traveling, exploring Japan when I'm able, and finding my next favorite coffee... and whiskey 😉.
          </Typography>
          <Typography
            variant='body1'
          >
            If you'd like to learn more about me or my experience, or if you'd like to connect, find me on <Link href='https://www.github.com/cpetrilla01' target='_blank'>GitHub</Link> or <Link href='https://www.linkedin.com/in/cpetrilla01/' target='_blank'>LinkedIn</Link>.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </SectionContainer>
);

export {About};