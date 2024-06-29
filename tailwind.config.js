/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#8BC34A",    // Verde claro
          DEFAULT: "#4CAF50",  // Verde medio
          dark: "#388E3C",     // Verde oscuro
        },
        secondary: {
          light: "#F36F29",    // Naranja claro
          DEFAULT: "#F36F29",  // Naranja medio
          dark: "#F36F29",     // Naranja oscuro
        },
        background: {
          light: "#E8F5E9",    // Fondo verde claro
          medium: "#C8E6C9",   // Fondo verde medio
          dark: "#A5D6A7",     // Fondo verde oscuro
        },
        text: {
          primary: "#212121",  // Texto primario (negro)
          secondary: "#757575",// Texto secundario (gris)
          onDark: "#FFFFFF",   // Texto en fondo oscuro (blanco)
        },
        link: {
          primary: "#FF9800",  // Enlace naranja medio
          hover: "#F57C00",    // Enlace naranja oscuro
        },
        border: {
          light: "#E0E0E0",    // Borde claro (gris)
          dark: "#BDBDBD",     // Borde oscuro (gris)
        },
        shadow: "rgba(0, 0, 0, 0.2)", // Sombra
      },
      height: {
        "5/10-screen": "50vh", // Altura personalizada 50% del viewport
        "6/10-screen": "60vh", // Altura personalizada 60% del viewport
      },
      fontSize: {
        "hero-title-mobile": ["1.5rem", { lineHeight: "2rem" }],  // Título principal en móvil
        "hero-title-desktop": ["3rem", { lineHeight: "3.5rem" }], // Título principal en escritorio
        "hero-subtitle-mobile": ["1rem", { lineHeight: "1.5rem" }], // Subtítulo en móvil
        "hero-subtitle-desktop": ["2rem", { lineHeight: "2.5rem" }], // Subtítulo en escritorio
        "body-mobile": ["0.875rem", { lineHeight: "1.25rem" }],   // Texto cuerpo en móvil
        "body-desktop": ["1rem", { lineHeight: "1.5rem" }],       // Texto cuerpo en escritorio
      },
    },
  },
  plugins: [],
};
