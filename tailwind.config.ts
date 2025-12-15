import defaultTheme from 'tailwindcss/defaultTheme';
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// Map daisyUI CSS variables so `/opacity` color utilities are generated.
				primary: 'oklch(var(--p) / <alpha-value>)',
				'primary-content': 'oklch(var(--pc) / <alpha-value>)',
				secondary: 'oklch(var(--s) / <alpha-value>)',
				'secondary-content': 'oklch(var(--sc) / <alpha-value>)',
				accent: 'oklch(var(--a) / <alpha-value>)',
				'accent-content': 'oklch(var(--ac) / <alpha-value>)',
				neutral: 'oklch(var(--n) / <alpha-value>)',
				'neutral-content': 'oklch(var(--nc) / <alpha-value>)',
				'base-100': 'oklch(var(--b1) / <alpha-value>)',
				'base-200': 'oklch(var(--b2) / <alpha-value>)',
				'base-300': 'oklch(var(--b3) / <alpha-value>)',
				'base-content': 'oklch(var(--bc) / <alpha-value>)',
				info: 'oklch(var(--in) / <alpha-value>)',
				success: 'oklch(var(--su) / <alpha-value>)',
				warning: 'oklch(var(--wa) / <alpha-value>)',
				error: 'oklch(var(--er) / <alpha-value>)',
				brand: {
					primary: '#6366F1',
					secondary: '#0EA5E9',
					accent: '#F97316',
					ink: '#0F172A',
					slate: '#1E293B'
				}
			},
			fontFamily: {
				display: ['Syne', '"Space Grotesk"', ...defaultTheme.fontFamily.sans],
				sans: ['Manrope', 'Inter', ...defaultTheme.fontFamily.sans],
				mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono]
			},
			spacing: {
				'section-compact': '3rem',
				'section-default': '6rem', // Increased for airier look
				'section-xl': '10rem'
			},
			maxWidth: {
				content: '45rem',
				wide: '68rem',
				full: '86rem'
			},
			boxShadow: {
				glow: '0 0 40px -10px rgba(99, 102, 241, 0.4)',
				'glow-lg': '0 0 80px -20px rgba(99, 102, 241, 0.3)',
				card: '0 20px 40px -12px rgba(0, 0, 0, 0.4)',
				'glass-inset': 'inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 2px 4px rgba(0,0,0,0.2)'
			},
			backdropBlur: {
				surface: '20px',
				deep: '40px'
			},
			transitionTimingFunction: {
				'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
				'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
				'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)'
			},
			keyframes: {
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				fade: {
					'0%': { opacity: 0, transform: 'translateY(16px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: 0, transform: 'translateY(20px) scale(0.98)' },
					'100%': { opacity: 1, transform: 'translateY(0) scale(1)' }
				},
				'reveal-width': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				}
			},
			animation: {
				'gradient-shift': 'gradient-shift 12s ease infinite',
				float: 'float 8s ease-in-out infinite',
				fade: 'fade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'reveal-width': 'reveal-width 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
			}
		}
	},
	plugins: [daisyui, typography],
	daisyui: {
		logs: false,
		themes: [
			{
				'studio-light': {
					primary: '#6366F1',
					'primary-content': '#F9FAFB',
					secondary: '#0EA5E9',
					'secondary-content': '#F0FDFF',
					accent: '#F97316',
					'accent-content': '#0F172A',
					neutral: '#1E293B',
					'neutral-content': '#E2E8F0',
					'base-100': '#F8FAFC',
					'base-200': '#E2E8F0',
					'base-300': '#CBD5F5',
					'base-content': '#0F172A',
					info: '#38BDF8',
					success: '#22C55E',
					warning: '#FACC15',
					error: '#F87171'
				}
			},
			{
				'studio-dark': {
					primary: '#A855F7',
					'primary-content': '#0B1120',
					secondary: '#38BDF8',
					'secondary-content': '#0B1120',
					accent: '#FB923C',
					'accent-content': '#0B1120',
					neutral: '#0F172A',
					'neutral-content': '#E2E8F0',
					'base-100': '#0B1120',
					'base-200': '#111827',
					'base-300': '#1E293B',
					'base-content': '#E2E8F0',
					info: '#0EA5E9',
					success: '#22C55E',
					warning: '#FACC15',
					error: '#F87171'
				}
			},
			{
				          "studio-pro-dark": {
				            "primary": "#38BDF8", // Light Blue
				            "primary-content": "#0F172A", // Dark Slate (High Contrast)
				            "secondary": "#818CF8", // Indigo
				            "secondary-content": "#FFFFFF", // White (Fixed Contrast)
				            "accent": "#F471B5", // Pink
				            "accent-content": "#FFFFFF", // White (Fixed Contrast)
				            "neutral": "#1E293B", // Slate 800
				            "neutral-content": "#94A3B8", // Slate 400
				            "base-100": "#0F172A", // Slate 900
				            "base-200": "#1E293B", // Slate 800
				            "base-300": "#334155", // Slate 700
				            "base-content": "#F8FAFC", // Slate 50
				            "info": "#38BDF8",
				            "success": "#34D399",
				            "warning": "#FBBF24",
				            "error": "#FB7185",
				          },			}
		]
	}
};

export default config;
