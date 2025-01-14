import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "Helvetica", "Arial", "sans-serif"],
        lexendDeca: ["LexendDeca", "Helvetica", "Arial", "sans-serif"],
        inter: ["Inter", "Helvetica", "Arial", "sans-serif"],
        opensans: ["OpenSans", "Helvetica", "Arial", "sans-serif"],
        // poppinsRegular: ["PoppinsRegular", "Helvetica", "Arial", "sans-serif"],
        // poppinsBlack: ["PoppinsBlack", "Helvetica", "Arial", "sans-serif"],
        // poppinsBold: ["PoppinsBold", "Helvetica", "Arial", "sans-serif"],
        // poppinsExtraBold: [
        //   "PoppinsExtraBold",
        //   "Helvetica",
        //   "Arial",
        //   "sans-serif",
        // ],
        // poppinsSemiBold: [
        //   "PoppinsSemiBold",
        //   "Helvetica",
        //   "Arial",
        //   "sans-serif",
        // ],
        // poppinsLight: ["PoppinsLight", "Helvetica", "Arial", "sans-serif"],
        // poppinsMedium: ["PoppinsMedium", "Helvetica", "Arial", "sans-serif"],
        // poppinsThin: ["PoppinsThin", "Helvetica", "Arial", "sans-serif"],
        // PloniRegular: ["PloniRegular", "Helvetica", "Arial", "sans-serif"],
        // PloniMedium: ["PloniMedium", "Helvetica", "Arial", "sans-serif"],
        // PloniLight: ["PloniLight", "Helvetica", "Arial", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        blue: {
          "100": "#E4ECFF",
        },
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};
export default config;
