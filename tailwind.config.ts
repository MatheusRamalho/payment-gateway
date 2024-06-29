import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-300': '#196DFF',
                'primary-500': '#025EFF',
                'primary-700': '#0255E8',

                'secondary-100': '#FBFBFD',
                'secondary-200': '#E6EDF0',
                'secondary-500': '#7F8AA5',
                'secondary-600': '#6F7999',
                'secondary-800': '#1B2350',
                'secondary-900': '#14234D',

                'bg-light': '#D6DBDC',
            },
            backgroundImage: {
                'gradient-light':
                    'linear-gradient(to bottom, transparent, #FFFFFF)',
                'gradient-dark':
                    'linear-gradient(to bottom, transparent, #025EFF)',
            },
        },
    },
    plugins: [],
}

export default config
