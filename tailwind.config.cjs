/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
    content: ['./public/index.html', './src/**/*.{tsx,ts}'],
    theme: {
        extend: {
            colors: {},
        },
        screen: {
            sm: '425px',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
        },
    },
    plugins: [],
    darkMode: 'class',
};
