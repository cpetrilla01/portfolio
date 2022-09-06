import React from 'react';
import {SectionContainer} from '../common';
import skillsListData from './skills-list-data';
import {
  Card,
  Container,
  Grid,
  Typography
} from '@mui/material';

const Skills = () => (
  <SectionContainer id='skills'>
    <Container>
      <Typography
        component='h2'
        variant='sectionHeader'
      >
        Skills
      </Typography>
      <Grid
        container
        spacing={4}
      >
        {skillsListData.map(({id, title, description}, index) =>
          <Grid
            item
            key={index}
            lg={3}
            md={4}
            sm={6}
            xs={12}
          >
            <Card
              elevation={3}
              sx={{
                height: '100%',
                p: 2,
              }}
            >
              {id}
              <Typography
                component='h3'
                variant='h5'
                sx={{py: 1}}
              >
                {title}
              </Typography>
              <Typography
                variant='body2'
              >
                {description}
              </Typography>
            </Card>
          </Grid>
        )}
      </Grid>
    </Container>
  </SectionContainer>
);

export {Skills};