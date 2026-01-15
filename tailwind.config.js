/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-primary": "#19ffc8",
        "accent-secondary": "#00e6b0",
      },
      spacing: {
        xxs: "0.0625rem", // 1px
        xs: "0.125rem", // 2px
        s: "0.25rem", // 4px
        m: "0.5rem", // 8px - base
        l: "0.75rem", // 12px
        xl: "1rem", // 16px
        "2xl": "1.5rem", // 24px
        "3xl": "2.5rem", // 40px
        "4xl": "4rem", // 64px
        "5xl": "6.5rem", // 104px
      },
      fontSize: {
        tiny: "0.6rem",
      },
    },
  },
  plugins: [],
};
