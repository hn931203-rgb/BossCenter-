import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 브랜드 컬러 — 신뢰감을 주는 네이비 + 행동을 유도하는 액션 컬러
        brand: {
          DEFAULT: "#0f2c4c",
          light: "#1c4670",
          dark: "#0a2138",
        },
        accent: {
          DEFAULT: "#f97316", // CTA 강조용 오렌지
          dark: "#ea580c",
        },
        kakao: {
          DEFAULT: "#FEE500",
          text: "#191600",
        },
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
