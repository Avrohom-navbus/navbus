import type { Config } from "tailwindcss";

const config: Config = {
    content: [
          "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        ],
    theme: {
          extend: {
                  colors: {
                            purple: {
                                        DEFAULT: "#7B2FBE",
                                        light: "#9B59D6",
                                        soft: "#F3EAFD",
                            },
                            orange: {
                                        DEFAULT: "#F5A623",
                                        light: "#FFC85A",
                                        soft: "#FFF4DC",
                            },
                  },
                  fontFamily: {
                            nunito: ["Nunito", "sans-serif"],
                  },
                  borderRadius: {
                            "2xl": "20px",
                            "3xl": "28px",
                            "4xl": "36px",
                  },
          },
    },
    plugins: [],
};

export default config;
