/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
    content: ['./public/index.html', './src/**/*.{tsx,ts}'],
    theme: {
        extend: {
            colors: {
                primary: '#1B73E8',
                dark: '#1C1E1F',
                dark_300: '#2E3032',
                dark_500: '#404258',
                white_100: '#393B38',
                error: '#850000',
            },
        },
        screen: {
            sm: '425px',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
        },
    },
    plugins: [],
};
