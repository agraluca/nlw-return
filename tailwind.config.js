module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          500: "#9559B1",
          800: "#662C91",
        },
        green: "#5F9C44",
        lightGreen: "#7FBB65",
        red: "#BF1D2D",
        white: "#ffffff",
        black: "#444444",
        gray: "#f3f3f3",
        darkGray: "#777777",
        yellow: "#FFEC02",
      },
      borderRadius: {
        md: "4px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
