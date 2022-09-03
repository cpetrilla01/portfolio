import React from 'react';
import {
	Box,
	Typography,
} from '@mui/material';

const Hero = () => (
	<Box
	  sx={{
			alignItems: 'center',
			backgroundColor: 'primary.light',
			color: 'white',
			display: 'flex',
			justifyContent: 'center',
			minHeight: '100vh',
			py: 6,
			px: 3,
		}}
	>
		<Typography
			variant='h1'
			component='p'
		>
			I build enterprise-level Javascript apps
		</Typography>
	</Box>
);

export {Hero};