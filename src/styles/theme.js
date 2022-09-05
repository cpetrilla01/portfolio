import {createTheme} from '@mui/material';

let theme = createTheme({
	palette: {
		primary: {
			main: '#0A72BA',
		},
		secondary: {
			main: '#033558',
		},
		text: {
			primary: '#444444',
		}
	},
	typography: {
		fontFamily: '"Source Sans 3", arial, sans-serif',
		body1: {
			fontSize: '1.25rem',
			marginBottom: '1rem',
		},
		body2: {
			fontSize: '1rem',
		},
		subtitle1: {
			fontSize: '3rem',
		},
	}
});

theme = createTheme(theme, {
	typography: {
		sectionHeader: {
			color: theme.palette.text.primary,
			fontFamily: theme.typography.fontFamily,
			fontSize: '3.75rem',
			fontWeight: '400',
			lineHeight: '1.2',
			paddingBottom: '2rem',
			textAlign: 'center',
		}
	},
});

export {theme};