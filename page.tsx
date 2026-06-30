import type { Metadata } from "next";
import { demolitionLanding as content } from "@/data/landing-demolition";
import { LandingTemplate } from "@/components/LandingTemplate";
import { FaqJsonLd } from "@/components/FaqJsonLd";

/**
 * 철거·상가 원상복구 랜딩페이지.
 * 콘텐츠는 /data/landing-demolition.ts 에서만 가져온다 (콘텐츠/코드 분리).
 */

// SEO: title / description / Open Graph — 데이터 파일의 seo 값에서 생성
export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  // 타겟 키워드
  keywords: ["상가 원상복구", "철거", "원상복구 비용", "상가 철거", "사무실 원상복구"],
  openGraph: {
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    url: content.seo.url,
    siteName: content.seo.siteName,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
  },
};

export default function Page() {
  return (
    <>
      {/* FAQ 구조화 데이터 (JSON-LD) — SEO/AEO 핵심 */}
      <FaqJsonLd items={content.faq.items} />
      <LandingTemplate content={content} />
    </>
  );
}
