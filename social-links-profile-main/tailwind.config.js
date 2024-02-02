/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "cGreen": "#c5f82a"
        },
        secondary: {
          "cWhite": "#ffffff",
          "cGrey": "#333333",
          "cDark-grey": "#1f1f1f",
          "cOff-black": "#141414"
        }
      },
      fontSize: {
        "cParagraph": "14px"
      },
      fontFamily: {
        "cInter": "Inter, sans-serif"
      }
    },
  },
  plugins: [],
}

