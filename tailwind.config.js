/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "tape_1": `url(../assets/images/naruto_tape_1.png)`,
                "tape_2": `url(../assets/vectors/tape-2.svg)`,
                "trama_1": `url(../assets/images/naruto_trama_1.png)`,
                "trama_2": `url(../assets/images/naruto_trama_2.png)`,
                "tab_deco": `url(../assets/vectors/tab_deco.svg)`,
                "rayos": `url(../assets/vectors/bg_rayos.svg)`,
                "espiral": `url(../assets/vectors/bg_espiral.svg)`,
                "lineas": `url(../assets/vectors/bg_lineas.svg)`,
            },
            backgroundSize: {
                "100": "100% 100%"
            },
            colors: {
                rojo: "#F03234",
                yanbalblack: "#1C1F28",
                gris6: "#F2F2F2",
                skin: "#FCE2D1",
                amarillo: "#FFCE00",
                naranja: "#FF6200"
            },
            fontFamily: {
                steelfish: ["var(--font-steelfish-eb)", "sans-serif"],
                electroharmonix: ["var(--font-electroharmonix)", "sans-serif"],
                fredoka: ["var(--font-fredoka)", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
            screens: {
                "desktop": "1360px"
            }
        },
    },
    darkMode: "class",
    plugins: [nextui({
        themes: {
            dark: {
                colors:{
                    danger: {
                        DEFAULT: "#F03234"
                    },
                    foreground: "#FFFFFF"
                }
            }
        }
    })],
};
