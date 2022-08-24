/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        F3F9FA: "#F3F9FA",
        C5E4E7: "#C5E4E7",
        "9FE8DF": "#9FE8DF",
        "26C2AE": "#26C2AE",
        "9EBBBD": "#9EBBBD",
        "7F9D9F": "#7F9D9F",
        "5E7A7D": "#5E7A7D",
        "#0D686D": "#0D686D",
        "3D6666": "#3D6666",
        "00474B": "#00474B",
        E17052: "#E17052",
        E17457: "#E17457",
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
      backgroundImage: {
        "icon-dollar": "url('/icon-dollar.svg')",
        "icon-person": "url('/icon-person.svg')",
      },
      backgroundPosition: {
        "left-center": "18px 16px",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(130px, 1fr))",
        "fluid-lg": "repeat(auto-fill, minmax(100px, 1fr))",
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
