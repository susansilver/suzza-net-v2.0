/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "white-50": "#FAFAFA",
        text: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#212121",
        },
        background: {
          50: "#edf6fd",
          100: "#e3f0fb",
          200: "#c1e2f6",
          300: "#8acaef",
          400: "#4bb0e5",
          500: "#2496d3",
          600: "#1678b3",
          700: "#135f91",
          800: "#145178",
          900: "#164464",
          950: "#0e2c43",
        },
        primary: {
          50: "#f9f7f7",
          100: "#f2eeee",
          200: "#e8e0e0",
          300: "#d1c3c3",
          400: "#beabab",
          500: "#a68d8d",
          600: "#8e7474",
          700: "#765f5f",
          800: "#635151",
          900: "#554747",
          950: "#2c2323",
        },
        secondary: {
          50: "#fcf4f4",
          100: "#fae6e6",
          200: "#f6d2d3",
          300: "#eeb3b4",
          400: "#e38688",
          500: "#d45f61",
          600: "#bf4346",
          700: "#a03537",
          800: "#852f31",
          900: "#702c2d",
          950: "#471718",
        },
        accent: {
          50: "#fef2f3",
          100: "#fee5e7",
          200: "#fccfd5",
          300: "#f9a8b3",
          400: "#f4788b",
          500: "#eb4865",
          600: "#d8274f",
          700: "#b51b41",
          800: "#98193d",
          900: "#82193a",
          950: "#48091b",
        },
      },
    },
  },
  plugins: [],
};
