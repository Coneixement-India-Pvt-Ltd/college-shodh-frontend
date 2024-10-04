/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "type": "typing 4s infinite, cursor 0.8s step-end infinite alternate",
      },
      keyframes: {
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        cursor: {
          "50%": { borderColor: "transparent" },
        },
      },
    },
    plugins: [],
  }
}

