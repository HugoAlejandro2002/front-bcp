/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        colors: {
          primary: {
            light: "#8BC34A",
            DEFAULT: "#4CAF50",
            dark: "#388E3C",
          },
          secondary: {
            light: "#FFEB3B",
            DEFAULT: "#FBC02D",
            dark: "#F57F17",
          },
          background: {
            light: "#E8F5E9",
            medium: "#C8E6C9",
            dark: "#A5D6A7",
          },
          text: {
            primary: "#212121",
            secondary: "#757575",
            onDark: "#FFFFFF",
          },
          link: {
            primary: "#1E88E5",
            hover: "#1565C0",
          },
          border: {
            light: "#E0E0E0",
            dark: "#BDBDBD",
          },
          shadow: "rgba(0, 0, 0, 0.2)",
        },
      },
      height: {
        '3/10-screen': '40vh',
        '5/10-screen': '60vh',
      },
      fontSize: {
        'hero-title-mobile': ['1.5rem', { lineHeight: '2rem' }],
        'hero-title-desktop': ['3rem', { lineHeight: '3.5rem' }],
        'hero-subtitle-mobile': ['1rem', { lineHeight: '1.5rem' }],
        'hero-subtitle-desktop': ['2rem', { lineHeight: '2.5rem' }],
        'body-mobile': ['0.875rem', { lineHeight: '1.25rem' }],
        'body-desktop': ['1rem', { lineHeight: '1.5rem' }],
      },
    },
  },
  plugins: [],
};
