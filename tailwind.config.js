/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "beau-rivage": ["Beau Rivage", "cursive"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        primary: "#1D3408",
        "primary-dark": "#7C3AED",
        secondary: "#FB7D5B",
        accent: "#10B981",
        tertiary: "#FCC43E",
        quatinery: "#4D7E20",
        danger: "#FF4550",
        // shad cn colors
        destructive: "rgb(var(--color-destructive-rgb) / <alpha-value>)",
        "destructive-foreground":
          "rgb(var(--color-destructive-foreground-rgb) / <alpha-value>)",
        muted: "rgb(var(--color-muted-rgb) / <alpha-value>)",
        "muted-foreground":
          "rgb(var(--color-muted-foreground-rgb) / <alpha-value>)",
        input: "rgb(var(--color-input-rgb) / <alpha-value>)",
        ring: "rgb(var(--color-ring-rgb) / <alpha-value>)",
        border: "rgb(var(--color-border-rgb) / <alpha-value>)",
        background: "rgb(var(--color-background-rgb) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground-rgb) / <alpha-value>)",
        primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
        "primary-foreground":
          "rgb(var(--color-primary-foreground-rgb) / <alpha-value>)",
        accent: "rgb(var(--color-accent-rgb) / <alpha-value>)",
        "accent-foreground":
          "rgb(var(--color-accent-foreground-rgb) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};