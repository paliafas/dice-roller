/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'roll-total': '#111',
                'roll-area': '#111',
                controls: '#222',
                'main-footer': '#4a437d',
                d4: '#084c61',
                d6: '#db504a',
                d8: '#cf9038',
                d10: '#4f6d7a',
                d12: '#56a3a6',
                d20: '#967aa1',
                'button-control': '#333',
            },
        },
    },
    plugins: [],
};
