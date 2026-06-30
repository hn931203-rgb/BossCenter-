import type { ReactNode } from "react";
import "./globals.css";

/**
 * 루트 레이아웃 — 페이지 단독 동작용 최소 구성.
 * (지시: 헤더/푸터/전체 네비게이션은 만들지 않음)
 * 페이지별 SEO 메타데이터는 각 page.tsx의 generateMetadata에서 설정한다.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-brand antialiased">{children}</body>
    </html>
  );
}
