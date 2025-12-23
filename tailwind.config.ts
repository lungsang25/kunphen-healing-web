import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'heading': ['Crimson Pro', 'Georgia', 'serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				// Typography scale based on specifications
				'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
				'h1': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
				'h2': ['2.125rem', { lineHeight: '1.3', fontWeight: '600' }],
				'h3': ['1.375rem', { lineHeight: '1.3', fontWeight: '600' }],
				'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
				'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
				'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '600' }],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Tibetan-inspired color palette (refined)
				burgundy: {
					50: '#fdf7f7',
					100: '#fceeed',
					200: '#f9d5d3',
					300: '#f3b5b1',
					400: '#e88078',
					500: '#d95a50',
					600: '#c44438',
					700: '#a3372d',
					800: '#872e26',
					900: '#5c1f1a',
					950: '#3d1411'
				},
				golden: {
					50: '#fefdf7',
					100: '#fdf9e8',
					200: '#faf0c5',
					300: '#f6e39d',
					400: '#f0d062',
					500: '#e8be3a',
					600: '#d4a52d',
					700: '#b08425',
					800: '#8e6824',
					900: '#755522',
					950: '#423010'
				},
				sage: {
					50: '#f6f8f6',
					100: '#e2e9e2',
					200: '#c5d4c5',
					300: '#9fb69f',
					400: '#769276',
					500: '#5a775a',
					600: '#465f46',
					700: '#3a4d3a',
					800: '#313f31',
					900: '#2a352a',
					950: '#151c15'
				},
				earth: {
					50: '#f9f7f4',
					100: '#f3efe9',
					200: '#e1d7c8',
					300: '#cfbfa7',
					400: '#ab8f65',
					500: '#875f23',
					600: '#7a5520',
					700: '#66471b',
					800: '#523916',
					900: '#432f12'
				},
				cream: {
					50: '#fefdfb',
					100: '#fdf9f3',
					200: '#faf3e5',
					300: '#f5ead4',
					400: '#eddcba',
					500: '#e4cda0'
				},
				warm: {
					50: '#faf9f7',
					100: '#f5f3ef',
					200: '#e6e1d7',
					300: '#d7cfbf',
					400: '#b9ab8f',
					500: '#9b875f',
					600: '#8c7a56',
					700: '#756648',
					800: '#5e523a',
					900: '#4d4330'
				}
			},
			spacing: {
				// 8px base grid
				'0.5': '0.125rem', // 2px
				'1': '0.25rem', // 4px
				'2': '0.5rem', // 8px
				'3': '0.75rem', // 12px
				'4': '1rem', // 16px
				'5': '1.25rem', // 20px
				'6': '1.5rem', // 24px
				'8': '2rem', // 32px
				'10': '2.5rem', // 40px
				'12': '3rem', // 48px
				'16': '4rem', // 64px
				'20': '5rem', // 80px
				'24': '6rem', // 96px
				'section': '5rem', // 80px - section margins
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'card': '0.75rem', // 12px
				'card-lg': '1rem', // 16px
			},
			boxShadow: {
				'card': '0 4px 20px -2px rgba(92, 31, 26, 0.08)',
				'card-hover': '0 12px 32px -4px rgba(92, 31, 26, 0.12)',
				'elevated': '0 8px 30px -4px rgba(92, 31, 26, 0.1)',
				'soft': '0 2px 12px -2px rgba(0, 0, 0, 0.06)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				'fade-in-up': {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				'fade-in-scale': {
					"0%": { opacity: "0", transform: "scale(0.95)" },
					"100%": { opacity: "1", transform: "scale(1)" }
				},
				'slide-in-right': {
					"0%": { opacity: "0", transform: "translateX(20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" }
				},
				'pulse-soft': {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.7" }
				},
				'float': {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-6px)" }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
				'fade-in-scale': 'fade-in-scale 0.5s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite',
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
	],
} satisfies Config;
