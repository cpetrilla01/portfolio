import { SectionContainer } from '../common/SectionContainer';
import { languages } from './languages.tsx';
import { tools } from './tools.tsx';
import { architecture } from './architecture.tsx';
import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material';

export interface Skill {
  icon?: React.ReactElement;
  title: string;
  description: string;
}

interface SkillSection {
  label: string;
  contents: Skill[];
}

const skillsSections: SkillSection[] = [
  {
    label: 'Languages',
    contents: languages,
  },
  {
    label: 'Tools',
    contents: tools,
  },
  {
    label: 'Architecture',
    contents: architecture,
  },
];

export const Skills = () => (
  <SectionContainer id='skills'>
    <Container>
      <Typography component='h2' variant='sectionHeader'>
        Skills
      </Typography>
      {skillsSections.map((section, index) => (
        <div key={index}>
          <Typography variant='h3' sx={{ my: 4 }}>
            {section.label}
          </Typography>
          <Box>
            <Grid container spacing={4}>
              {section.contents.map(({ icon, title, description }, index) => (
                <Grid key={index} size={{ lg: 3, md: 4, sm: 6, xs: 12 }}>
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
                      {icon && icon}
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
        </div>
      ))}
    </Container>
  </SectionContainer>
);
