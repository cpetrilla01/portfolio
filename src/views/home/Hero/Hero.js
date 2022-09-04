import React from 'react';
import {SectionContainer} from '../SectionContainer';
import {
	Box,
	Typography,
} from '@mui/material';

const Hero = () => (
	<SectionContainer
	  sx={{
			alignItems: 'center',
			backgroundColor: 'primary.light',
			color: 'white',
			display: 'flex',
			justifyContent: 'center',
		}}
	>
		<Typography
			color='inherit'
			variant='subtitle1'
		>
			I build enterprise-level Javascript apps
		</Typography>
	</SectionContainer>
);

export {Hero};