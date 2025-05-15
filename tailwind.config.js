import { withAccountKitUi, createColorSet } from '@account-kit/react/tailwind';

/** @type {import('tailwindcss').Config} */
export default withAccountKitUi(
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'aarc-bg': '#2D2D2D',
          'aarc-primary': '#A5E547',
          'aarc-text': '#C3C3C3',
          'aarc-button-text': '#003300',
          'aarc-border': '#3D3D3D',
        },
        fontFamily: {
          sans: ['DM Sans', 'sans-serif'],
        },
        boxShadow: {
          'aarc': '4px 8px 8px 4px #0000001A',
        },
        borderImage: {
          'gradient': 'linear-gradient(145.73deg, rgba(165, 229, 71, 0.3) 0%, rgba(128, 26, 229, 0.3) 20%, rgba(165, 229, 71, 0.3) 80%, rgba(128, 26, 229, 0.3) 100%) 1',
        },
        backgroundImage: {
          'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        },
        backgroundSize: {
          'grid': '24px 24px',
        },
      },
    },
    plugins: [],
  },
  {
    colors: {
      // Border colors
      active: createColorSet('#A5E547', '#A5E547'),
      static: createColorSet('#3D3D3D', '#3D3D3D'),
      critical: createColorSet('#FF4D4D', '#FF4D4D'),

      // Button colors
      'btn-primary': createColorSet('#A5E547', '#A5E547'),
      'btn-secondary': createColorSet('#3D3D3D', '#3D3D3D'),
      'btn-auth': createColorSet('#A5E547', '#A5E547'),

      // Foreground colors
      'fg-primary': createColorSet('#FFFFFF', '#FFFFFF'),
      'fg-secondary': createColorSet('#E5E5E5', '#E5E5E5'),
      'fg-tertiary': createColorSet('#C3C3C3', '#C3C3C3'),
      'fg-invert': createColorSet('#003300', '#003300'),
      'fg-disabled': createColorSet('#808080', '#808080'),
      'fg-accent-brand': createColorSet('#A5E547', '#A5E547'),
      'fg-critical': createColorSet('#FFFFFF', '#FFFFFF'),

      // Surface colors
      'bg-surface-default': createColorSet('#2D2D2D', '#2D2D2D'),
      'bg-surface-subtle': createColorSet('#3D3D3D', '#3D3D3D'),
      'bg-surface-inset': createColorSet('#1A1A1A', '#1A1A1A'),
      'bg-surface-critical': createColorSet('#FF4D4D', '#FF4D4D'),
      'bg-surface-error': createColorSet('#FF4D4D', '#FF4D4D'),
      'bg-surface-success': createColorSet('#A5E547', '#A5E547'),
      'bg-surface-warning': createColorSet('#FFB800', '#FFB800'),
    },
    borderRadius: 'md', // 16px border radius to match your existing UI
  }
);

