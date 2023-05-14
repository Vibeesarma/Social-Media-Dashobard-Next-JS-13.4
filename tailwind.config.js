/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      // custom size for design
      sm: "640px",
      md: "1150px",
      lg: "1400px",
    },
    colors: {
      limegreen: "hsl(163,72%,41%)",
      brightred: "hsl(356, 69%, 56%)",
      facebook: "hsl(208, 92%, 53%)",
      twitter: "hsl(203, 89%, 53%)",
      instagram_start: "hsl(37, 97%, 70%)",
      instagram_end: "hsl(329, 70%, 58%)",
      toggle_bg_start: "hsl(210, 78%, 56%)",
      toggle_bg_end: "hsl(146, 68%, 55%)",
      youtube: "hsl(348, 97%, 39%)",
      toggle: "hsl(230, 22%, 74%)",

      // dark theme
      dark_bg: "hsl(230, 17%, 14%)",
      dark_top_bg: "hsl(232, 19%, 15%)",
      dark_card: "hsl(228, 28%, 20%)",
      dark_text1: "hsl(228, 34%, 66%)",
      dark_text2: "hsl(0, 0%, 100%)",

      // white theme
      white_bg: "hsl(0, 0%, 100%)",
      white_top_bg: "hsl(225, 100%, 98%)",
      white_card: "hsl(227, 47%, 96%)",
      white_text1: "hsl(228, 12%, 44%)",
      white_text2: "hsl(230, 17%, 14%)",
    },
  },
  plugins: [],
};
