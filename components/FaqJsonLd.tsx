import type { FaqItem } from "@/data/types";

/**
 * FAQ 구조화 데이터 (JSON-LD, schema.org FAQPage).
 * Google 리치 결과 및 ChatGPT/Perplexity 등 AI 검색 인용에 유리 (AEO 핵심).
 */
export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // 구조화 데이터는 정적 콘텐츠라 XSS 위험 없음
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
