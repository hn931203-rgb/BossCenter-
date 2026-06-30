/**
 * 랜딩페이지 콘텐츠 타입 정의
 * --------------------------------------------------------------
 * 이 타입은 "철거·원상복구" 외 다른 서비스 카테고리 랜딩페이지에서도
 * 그대로 재사용된다. (Programmatic SEO: 서비스 × 지역 × 업종 확장 대비)
 * 콘텐츠는 전부 이 구조에 맞춰 /data/landing-*.ts 로 분리한다.
 */

/** 연락처 / CTA 링크 (CtaButtons 컴포넌트 props로 그대로 전달) */
export interface ContactInfo {
  /** 대표 전화번호 (tel: 링크에 사용) */
  phone: string;
  /** 카카오톡 채널/오픈채팅 링크 */
  kakaoUrl: string;
  /** 무료 진단 신청 폼 링크 또는 앵커(#form) */
  formUrl: string;
}

/** 상단/하단에 반복 노출하는 신뢰 배지 */
export interface TrustBadge {
  /** lucide-react 아이콘 이름 (components/Icon.tsx 매핑 참고) */
  icon: string;
  label: string;
  /** 플레이스홀더 여부 — true면 화면에 '추정/예시' 뉘앙스로 표기 */
  isPlaceholder?: boolean;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  badges: TrustBadge[];
}

/** 아이콘 + 제목 + 설명으로 구성되는 범용 카드 (원인/차별성 등에 재사용) */
export interface IconCard {
  icon: string;
  title: string;
  description: string;
}

/** 비교표 한 행 */
export interface ComparisonRow {
  label: string;
  /** 왼쪽 컬럼(부정적/일반 업체) 값 */
  left: string;
  /** 오른쪽 컬럼(우리 서비스/권장) 값 */
  right: string;
}

export interface ComparisonTable {
  leftTitle: string;
  rightTitle: string;
  rows: ComparisonRow[];
}

/** 프로세스 단계 */
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  /** 소요 기간 표기 (예: "당일", "1~2일") */
  duration: string;
}

/** 시공 사례 카드 */
export interface CaseStudy {
  /** 업종 (카페/음식점/사무실/병원 등) */
  industry: string;
  /** 평수 표기 (예: "약 30평") */
  size: string;
  /** 비용대 — 범위로 표기 (예: "350~480만원") */
  costRange: string;
  /** 소요 기간 (예: "3일") */
  duration: string;
  /** 한 줄 요약 */
  summary: string;
}

/** 고객 후기 카드 */
export interface Testimonial {
  /** 이름 — "OOO 사장님" 형식 */
  name: string;
  /** 업종 */
  industry: string;
  /** 지역 */
  region: string;
  comment: string;
}

/** FAQ 항목 (질문-즉답 1문단 구조 — AEO 최적화) */
export interface FaqItem {
  question: string;
  answer: string;
}

/** 섹션 공통: 작은 제목(eyebrow) + 제목 + 부제 */
export interface SectionHeading {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

/** SEO 메타데이터 */
export interface SeoMeta {
  title: string;
  description: string;
  /** Open Graph용 */
  ogTitle: string;
  ogDescription: string;
  /** 정식 URL (배포 후 교체) */
  url: string;
  siteName: string;
}

/** 랜딩페이지 전체 콘텐츠 */
export interface LandingContent {
  /** 회사명 등 식별 정보 */
  companyName: string;
  contact: ContactInfo;
  seo: SeoMeta;

  hero: HeroContent;

  /** 2. 원인 설명 */
  causes: {
    heading: SectionHeading;
    cards: IconCard[];
  };

  /** 3. 해결 방법 (비교표) */
  solution: {
    heading: SectionHeading;
    comparison: ComparisonTable;
  };

  /** 4. 서비스 프로세스 */
  process: {
    heading: SectionHeading;
    steps: ProcessStep[];
  };

  /** 5. 차별성 (비교표 + 체크리스트) */
  differentiator: {
    heading: SectionHeading;
    highlight: string;
    comparison: ComparisonTable;
  };

  /** 6. 시공 사례 */
  cases: {
    heading: SectionHeading;
    items: CaseStudy[];
  };

  /** 7. 고객 후기 */
  testimonials: {
    heading: SectionHeading;
    items: Testimonial[];
  };

  /** 8. FAQ */
  faq: {
    heading: SectionHeading;
    items: FaqItem[];
  };

  /** 9. 최종 CTA */
  finalCta: {
    heading: SectionHeading;
  };
}
