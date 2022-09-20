import React from 'react';
import {SectionContainer} from '../common';
import {core} from './core';
import {tools} from './tools';
import {architecture} from './architecture';
import {
  Box,
  Card,
  Container,
  Grid,
  Typography
} from '@mui/material';

const skillsSections = [
  {
    label: 'Core technologies',
    contents: [...core],
  },
  {
    label: 'Tools',
    contents: [...tools],
  },
  {
    label: 'Architecture',
    contents: [...architecture],
  },
];

const Skills = () => (
  <SectionContainer id='skills'>
    <Container>
      <Typography
        component='h2'
        variant='sectionHeader'
      >
        Skills
      </Typography>
      {skillsSections.map((section, index) =>
        <div key={index}>
          <Typography
            variant='h3'
            my={4}
          >
            {section.label}
          </Typography>
          <Box>
            <Grid
              container
              spacing={4}
            >
              {section.contents.map(({id, title, description}, index) =>
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
          </Box>
        </div>
      )}
    </Container>
  </SectionContainer>
);

export {Skills};