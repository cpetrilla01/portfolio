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
        sx={{pb: 4}}
        textAlign='center'
        variant='h2'
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
            mb={2}
            variant='body1'
          >
            I'm a front-end engineer living in Philadelphia, PA. I have nine years of professional experience with front-end engineering and development, but my personal interest in the field began with my first GeoCities fan page in 1997.
          </Typography>
          <Typography
            mb={2}
            variant='body1'
          >
            Currently, I'm front-end engineer with Elsevier, a medical publishing company. I've been with Elsevier for seven years, and during that time, I've progressed from a junior- to senior-level role, contributing to each of the ClinicalKey applications: Physician, Nursing, Student, and most recently, CK Now.
          </Typography>
          <Typography
            mb={2}
            variant='body1'
          >
            Before Elsevier, I worked with the University of Delaware as a Web developer. I focused on building interactive Web applications, but my role also included requirements gathering, QA, and some project management.
          </Typography>
          <Typography
            mb={2}
            variant='body1'
          >
            I love development, but I like to round out my career with personal interests: watching movies, reading, learning photography, traveling, and experiencing Japanese food and language... and drinking whiskey 😄.
          </Typography>
          <Typography
            mb={2}
            variant='body1'
          >
            If you'd like to connect, find me on <Link href='https://www.github.com/cpetrilla01' target='_blank'>GitHub</Link> or <Link href='https://www.linkedin.com/in/cpetrilla01/' target='_blank'>LinkedIn</Link>.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </SectionContainer>
);

export {About};