# BossCenter (사장님센터)

전국 사업자·소상공인을 대상으로 하는 **B2B 시공·창업지원 통합 플랫폼**입니다.
철거·원상복구를 시작으로, "서비스 카테고리 × 지역 × 업종" 조합으로 확장되는
Programmatic SEO 구조의 랜딩페이지를 제공합니다.

## 주요 서비스 카테고리

- 철거 / 상가·사무실 원상복구
- 폐기물 처리
- 인테리어 / 시공
- POS · 키오스크 등 매장 설비
- 정부지원사업 안내

> 현재 리포지토리에는 첫 번째 서비스인 **"철거·상가 원상복구"** 랜딩페이지가 구현되어 있습니다.

## 기술 스택

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) (아이콘)

## 로컬 실행 방법

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 (http://localhost:3000)
```

기타 스크립트:

```bash
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
npm run lint     # 린트
```

## 폴더 구조

```
BossCenter/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # 루트 레이아웃
│   ├── page.tsx              # 철거·원상복구 랜딩페이지 (+ SEO 메타, FAQ JSON-LD)
│   └── globals.css           # 전역 스타일 (Tailwind)
├── components/               # 재사용 UI 컴포넌트
│   ├── LandingTemplate.tsx   # 데이터 → 9개 섹션 조립 템플릿 (확장의 핵심)
│   ├── CtaButtons.tsx        # 전화/카카오톡/폼 CTA (props로 연락처 주입)
│   ├── FaqAccordion.tsx      # FAQ 아코디언
│   ├── FaqJsonLd.tsx         # FAQPage 구조화 데이터(JSON-LD)
│   ├── ComparisonTableView.tsx
│   ├── TrustBadges.tsx
│   ├── SectionHeading.tsx
│   ├── StickyMobileCta.tsx   # 모바일 하단 고정 CTA
│   ├── ApplyForm.tsx         # 무료 진단 신청 폼
│   └── Icon.tsx              # lucide 아이콘 문자열 매핑
├── data/                     # 콘텐츠/타입 (코드와 분리)
│   ├── types.ts              # LandingContent 등 공용 타입
│   └── landing-demolition.ts # 철거·원상복구 페이지 콘텐츠 (교체 지점)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json             # @/* 경로 alias 설정
└── package.json
```

## 설계 원칙

- **콘텐츠 ↔ 코드 분리**: 모든 텍스트는 `data/landing-*.ts`로 분리하고, 페이지는
  `LandingTemplate`에 데이터만 전달합니다. 새 서비스는 데이터 파일만 추가하면 됩니다.
- **모바일 우선**: 타겟 고객 특성상 모바일에서 즉시 전화·상담이 가능하도록 설계했습니다.
- **SEO/AEO**: 시맨틱 태그, Open Graph, FAQ JSON-LD를 기본 적용했습니다.

## 환경 변수

현재 별도의 환경 변수는 필요하지 않습니다. 향후 폼 전송·API 연동 시
`.env.local`에 추가하고, 예시는 `.env.example`로 관리하세요.

## 교체가 필요한 플레이스홀더

`data/landing-demolition.ts` 내 주석으로 표기되어 있습니다.

- `[PLACEHOLDER]`: 회사명, 대표 전화번호, 카카오톡 링크, 배포 도메인
- `[추정치]` / `[예시]`: 시공 사례(평수·비용·기간), 고객 후기, 신뢰 배지 숫자
