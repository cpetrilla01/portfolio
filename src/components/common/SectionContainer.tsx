import React from 'react';
import { Container } from '@mui/material';

export interface SectionContainerProps {
  id?: string;
  sx?: object;
  children: React.ReactNode;
}

export const SectionContainer = (props: SectionContainerProps) => (
  <Container
    id={props.id || ''}
    maxWidth={false}
    sx={{
      py: 8,
      px: 3,
      ...props.sx,
    }}
  >
    {props.children}
  </Container>
);
