/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
    content: ['./public/index.html', './src/**/*.{tsx,ts}'],
    theme: {
        extend: {
            colors: {
                white_burl: '#FCFDFD',
                dark_burl: 'rgba(0,0,0, 0.5)',
                dark: '#1B2430',
            },
            backgroundImage: {
                'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
                'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
                'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
                'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
                'gradient-to-tr':
                    'linear-gradient(to top right, var(--tw-gradient-stops))',
                'gradient-to-br':
                    'linear-gradient(to bottom right, var(--tw-gradient-stops))',
                'gradient-to-bl':
                    'linear-gradient(to bottom left, var(--tw-gradient-stops))',
                'gradient-to-tl':
                    'linear-gradient(to top left, var(--tw-gradient-stops))',
            },
        },
        screen: {
            sm: '425px',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
        },
        backgroundImage: {
            'kyc-mobile': "url('assets/images/kyc/backgroundMobileKYC.jpg')",
            'kyc-desktop': "url('assets/images/kyc/backgroundDesktopKYC.jpg')",
        },
    },
    plugins: [],
    darkMode: 'class',
};
