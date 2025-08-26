import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
                mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
            },
            colors: {
                primary: '#1E40AF', // Custom primary color
                secondary: '#F59E0B', // Custom secondary color
            },
        },
    },
    plugins: [],
};
export default config;