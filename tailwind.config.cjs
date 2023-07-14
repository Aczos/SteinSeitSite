/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        primeryColor: "#EDC41F",
      },
      fontFamily: {
        Anton: ["Anton"],
        Dosis: ["Dosis"],
      },
      boxShadow: {
        navShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
