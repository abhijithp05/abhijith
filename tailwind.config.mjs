// /** @type {import('tailwindcss').Config} */
// const config = {
//   darkMode: "class",
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         // Define colors for themes here
//         light: {
//           background: "#ffffff",
//           text: "#000000",
//           primary: "#1D4ED8",
//           secondary: "#9333EA",
//         },
//         dark: {
//           background: "#121212",
//           text: "#E5E5E5",
//           primary: "#3B82F6",
//           secondary: "#9333EA",
//         },
//       },
//       // Add a CSS variable to control the theme's background and text color
//       // It's more manageable for switching themes
//       variables: {
//         "--bg-color": "var(--light-bg)",
//         "--text-color": "var(--light-text)",
//         "--primary-color": "var(--light-primary)",
//         "--secondary-color": "var(--light-secondary)",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;

// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-bg": "#f7f7f7",
        "dark-bg": "#2a2a2a",
        "light-text": "#333",
        "dark-text": "#fff",
      },
    },
  },
  plugins: [],
};
