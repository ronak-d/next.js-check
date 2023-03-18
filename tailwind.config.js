/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        sm: "0 35px 35px rgba(0, 0, 0, 0.25)",
        md: "0 35px 35px rgba(0, 0, 0, 0.25)",
        lg: "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
  plugins: [require("@tailwindcss/typography")],
};
