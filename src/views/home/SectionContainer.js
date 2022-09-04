import React from 'react';
import {
	Container
} from '@mui/material';

const SectionContainer = (props) => (
	<Container
		maxWidth={false}
		sx={{
			minHeight: '100vh',
			py: 6,
			px: 3,
			...props.sx,
		}}
	>
		{props.children}
	</Container>
)

export {SectionContainer};