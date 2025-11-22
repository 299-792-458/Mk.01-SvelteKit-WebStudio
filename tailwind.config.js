import defaultTheme from 'tailwindcss/defaultTheme';
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
				sans: ['Manrope', ...defaultTheme.fontFamily.sans],
				mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono]
			},
			colors: {
				brand: {
					primary: '#6366F1',
					secondary: '#0EA5E9',
					accent: '#F97316',
					ink: '#0F172A',
					slate: '#1E293B'
				}
			},
			spacing: {
				'section-compact': '3rem',
				'section-default': '4rem',
				'section-xl': '6rem'
			},
			maxWidth: {
				content: '45rem',
				wide: '64rem',
				full: '76rem'
			},
			boxShadow: {
				glow: '0 12px 40px -20px rgba(99, 102, 241, 0.65)',
				card: '0 18px 40px -24px rgba(15, 23, 42, 0.25)'
			},
			backdropBlur: {
				surface: '18px'
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
				}
			},
			animation: {
				'gradient-shift': 'gradient-shift 12s ease infinite',
				float: 'float 8s ease-in-out infinite',
				fade: 'fade 0.6s ease forwards'
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
				'studio-pro-dark': {
					primary: '#8B5CF6', // A vibrant purple
					'primary-content': '#FFFFFF',
					secondary: '#38BDF8', // A bright blue
					'secondary-content': '#000000',
					accent: '#F471B5', // A pinkish accent
					'accent-content': '#000000',
					neutral: '#1E293B',
					'neutral-content': '#E2E8F0',
					'base-100': '#020617', // A very dark blue
					'base-200': '#0f172a',
					'base-300': '#1e293b',
					'base-content': '#E2E8F0',
					info: '#0EA5E9',
					success: '#22C55E',
					warning: '#FACC15',
					error: '#F87171'
				}
			}
		]
	}
};
