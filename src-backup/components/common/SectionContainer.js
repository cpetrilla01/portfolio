import React from 'react';
import {
	Container
} from '@mui/material';

const SectionContainer = (props) => (
	<Container
		id={props.id || ''}
		maxWidth={false}
		sx={{
			minHeight: 'calc(100vh - 56px)',
			py: 8,
			px: 3,
			'@media only screen and (min-width: 425px)': {
				minHeight: 'calc(100vh - 48px)',
			},
			'@media only screen and (min-width: 600px)': {
				minHeight: 'calc(100vh - 64px)',
			},
			...props.sx,
		}}
	>
		{props.children}
	</Container>
)

export {SectionContainer};