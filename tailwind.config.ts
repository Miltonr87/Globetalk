import type { Config } from 'tailwindcss';
import { nextui } from "@nextui-org/react";

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
                mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
            },
            colors: {
                primary: '#1E40AF',
                secondary: '#F59E0B',
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};
export default config;