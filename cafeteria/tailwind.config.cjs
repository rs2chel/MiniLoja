/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class', // enable dark mode via class
    theme: {
        extend: {
            colors: {
                primary: '#D97706', // exemplo café laranja
                secondary: '#4B5563',
                accent: '#FBBF24',
            },
            boxShadow: {
                card: '0 4px 6px rgba(0,0,0,0.1)',
                cardDark: '0 4px 6px rgba(0,0,0,0.5)',
            },
            borderRadius: {
                lg: '0.75rem',
            },
        },
    },
    plugins: [],
};
