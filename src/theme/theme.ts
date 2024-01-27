'use client';
import {
	cssVar,
	defineStyle,
	defineStyleConfig,
	extendTheme,
	ThemeConfig,
} from '@chakra-ui/react';

const subtleShadow = '0px 5px 20px 0px rgba(68, 68, 68, 0.05)';
const topShadow = '0px -2px 20px 0px rgba(0, 0, 0, 0.10)';

// 2. Add color mode config
const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

// 3. extend the theme
const colors = {
	button: {
		200: '#ECECE8',
		300: '#B8A1B1',
		500: '#643843',
		600: '#4B2E2F',
	},
	primary: {
		light: '#AC7D88',
		dark: '#B8A1B1',
	},
	buttonColor: {
		light: '#B8A1B1',
		dark: '#AC7D88',
	},
	bg: {
		light: '#f1f1f1',
		dark: '#222222',
	},
	text: {
		light: '#1D1D21',
		dark: '#ECECE8',
	},
};

const $startColor = cssVar('skeleton-start-color');
const $endColor = cssVar('skeleton-end-color');

const skeletonTheme = defineStyleConfig({
	variants: {
		faded: {
			[$startColor.variable]: 'colors.gray.100', //changing startColor to gray.100
			[$endColor.variable]: 'colors.gray.300', // changing endColor to gray.300
			borderRadius: '2px',
		},
	},
	defaultProps: {
		variant: 'faded',
	},
});

const components = {
	Button: {
		baseStyle: {},
		variants: {
			'365': {
				bgColor: 'primaryLight.light',
				fontWeight: '700',
				borderRadius: 'full',
				color: 'whitesmoke',
				border: '2px solid',
				borderColor: 'primaryDark.light',

				_loading: {
					_hover: {
						bgColor: 'primaryLight.light',
						color: 'whitesmoke',
						border: '2px solid',
						borderColor: 'primaryDark.light',
					},
				},
				// _hover: {
				// 	bgColor: 'primaryDark.light',
				// },
				_dark: {
					bgColor: 'primaryLight.dark',
					color: '#222',
					borderColor: 'primaryDark.dark',
				},
				_active: {
					bgColor: 'primaryDark.dark',
					borderColor: 'primaryDark.dark',
				},
			},
		},
	},
	Skeleton: skeletonTheme,
	Text: {
		baseStyle: {
			color: 'text.light',
			_dark: {
				color: 'text.dark',
			},
		},
	},
	Stack: {
		baseStyle: {},
		variants: {
			'product-card': {
				bgColor: 'container.light',
				padding: '16px',
				boxShadow: subtleShadow,
				borderRadius: '8px',
				_dark: {
					bgColor: 'container.dark',
				},
			},
		},
	},
	Box: {
		baseStyle: {},
		variants: {},
	},
	Tag: {
		baseStyle: {
			fontSize: '12px',
			fontWeight: '700',
		},
	},
};
const shadows = {
	//'floating-cart-shadow': '2px 4px 20px rgba(137, 201, 121, 0.58)',
	'floating-cart-shadow': subtleShadow,
	'subtle-shadow': subtleShadow,
	top: topShadow,
};

// 6. Add Breakpoints
export const breakpoints = {
	base: '0px',
	sm: '480px',
	md: '768px',
	lg: '992px',
	xl: '1280px',
};

export const theme = extendTheme({
	config,
	colors,
	components,
	breakpoints,
	shadows,
});
