/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluish: "#0f0e17",
        headline: "#fffffe",
        text: "#a7a9be",
        btn: "#ff8906",
        btnHover: "#ffd7b3",
        btnText: "#fffffe",
        sec: "#f25f4c",
        hover: "#ff8906",
        tertiary: "#e53170",
      },
    },
  },
  plugins: [],
};
