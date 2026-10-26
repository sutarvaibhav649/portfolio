/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0d0f",
        panel: "#121619",
        line: "#293137",
        lime: "#a3e635",
        muted: "#9ca6ac",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(163, 230, 53, 0.10)",
      },
    },
  },
  plugins: [],
};
