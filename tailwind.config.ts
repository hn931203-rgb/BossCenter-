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
        // 브랜드 컬러 — 전문적이고 신뢰감을 주는 딥 틸(페트롤) + 행동 유도 액션 컬러
        brand: {
          DEFAULT: "#0e4f54",
          light: "#15727a",
          dark: "#0b3b3e",
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
