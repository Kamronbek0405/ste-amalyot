/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dot-inactive': 'gray',
        'dot-active': 'red',
      },
      spacing: {
        'dot-spacing': '10px',
      },
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.slick-dots': {
          position: 'absolute',
          bottom: theme('spacing.2'),
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.slick-dots li': {
          margin: theme('spacing.dot-spacing'),
        },
        '.slick-dots li button::before': {
          content: '"•"',
          fontSize: '12px',
          color: theme('colors.dot-inactive'),
          opacity: '1',
        },
        '.slick-dots li.slick-active button::before': {
          color: theme('colors.dot-active'),
        },
        '.slick-dots li button:hover::before': {
          color: theme('colors.dot-active'),
        },
      });
    },
  ],
};
