import type { LandingContent } from "@/data/types";
import { CtaButtons } from "./CtaButtons";
import { TrustBadges } from "./TrustBadges";
import { SectionHeading } from "./SectionHeading";
import { ComparisonTableView } from "./ComparisonTableView";
import { FaqAccordion } from "./FaqAccordion";
import { ApplyForm } from "./ApplyForm";
import { StickyMobileCta } from "./StickyMobileCta";
import { Icon } from "./Icon";

/**
 * LandingTemplate — 데이터(LandingContent) 한 덩어리를 받아 9개 섹션을 조립한다.
 * 페이지(app/page.tsx)는 이 템플릿에 데이터만 넘긴다 → 콘텐츠/코드 분리.
 * 다른 서비스 랜딩페이지도 같은 템플릿 + 다른 데이터로 생성 가능.
 */
export function LandingTemplate({ content }: { content: LandingContent }) {
  const { contact } = content;

  return (
    <main className="pb-16 sm:pb-0">
      {/* ============ 1. HERO ============ */}
      <section className="relative overflow-hidden bg-brand text-white">
        {/* 배경 공사 사진 — public/images 에 파일을 넣으면 자동 적용, 없으면 틸 배경 유지 */}
        {content.hero.backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${content.hero.backgroundImage}")` }}
            aria-hidden="true"
          />
        )}
        {/* 가독성용 오버레이 (사진이 비치되, 텍스트가 읽히도록 틸 반투명 그라데이션) */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/85 via-brand/65 to-brand/35" />
        <div className="relative mx-auto max-w-content px-5 py-16 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] sm:py-24">
          <div className="mb-6">
            <TrustBadges badges={content.hero.badges} onDark />
          </div>
          <h1 className="whitespace-pre-line text-3xl font-extrabold leading-tight sm:text-5xl sm:leading-tight">
            {content.hero.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 sm:text-xl">
            {content.hero.subheadline}
          </p>
          <div className="mt-8">
            <CtaButtons
              phone={contact.phone}
              kakaoUrl={contact.kakaoUrl}
              formUrl={contact.formUrl}
              onDark
            />
          </div>
        </div>
      </section>

      {/* ============ 1-1. 숫자 신뢰단 ============ */}
      <section className="border-b border-black/[0.06] bg-white">
        <div className="mx-auto max-w-content px-5 py-12 sm:py-14">
          {content.stats.heading && (
            <div className="mb-8">
              <SectionHeading heading={content.stats.heading} />
            </div>
          )}
          <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
            {content.stats.items.map((stat, i) => (
              <div key={i} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span
                    className="text-4xl font-extrabold tracking-tight text-brand sm:text-5xl"
                    title={stat.isPlaceholder ? "추정/예시 값 — 실제 실적으로 교체 필요" : undefined}
                  >
                    {stat.value}
                    {stat.unit && <span className="ml-0.5 text-2xl sm:text-3xl">{stat.unit}</span>}
                  </span>
                  <p
                    className={`mt-2 text-sm font-medium text-slate-500 ${
                      stat.isPlaceholder ? "underline decoration-dashed decoration-slate-300 underline-offset-4" : ""
                    }`}
                  >
                    {stat.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============ 2. 원인 설명 ============ */}
      <Section>
        <SectionHeading heading={content.causes.heading} />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {content.causes.cards.map((card, i) => (
            <div key={i} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-dark">
                <Icon name={card.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-brand">{card.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ 3. 해결 방법 ============ */}
      <Section tinted>
        <SectionHeading heading={content.solution.heading} />
        <div className="mt-10">
          <ComparisonTableView table={content.solution.comparison} />
        </div>
      </Section>

      {/* ============ 4. 서비스 프로세스 ============ */}
      <Section>
        <SectionHeading heading={content.process.heading} />
        <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-4">
          {content.process.steps.map((step, i) => (
            <li key={i} className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-brand">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
              <p className="mt-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent-dark">
                소요 {step.duration}
              </p>
              {/* 단계 연결 화살표 (데스크톱에서 카드 사이) */}
              {i < content.process.steps.length - 1 && (
                <span
                  className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center text-brand-light sm:flex"
                  aria-hidden="true"
                >
                  ›
                </span>
              )}
            </li>
          ))}
        </ol>
      </Section>

      {/* ============ 5. 차별성 ============ */}
      <Section tinted>
        <SectionHeading heading={content.differentiator.heading} />
        <div className="mx-auto mt-6 flex max-w-2xl items-start gap-3 rounded-2xl border border-accent/30 bg-accent/5 p-5 text-center sm:text-left">
          <Icon name="Camera" className="mt-0.5 hidden h-6 w-6 flex-shrink-0 text-accent-dark sm:block" />
          <p className="text-base font-bold text-brand">{content.differentiator.highlight}</p>
        </div>
        <div className="mt-8">
          <ComparisonTableView table={content.differentiator.comparison} />
        </div>
      </Section>

      {/* ============ 6. 시공 사례 ============ */}
      <Section>
        <SectionHeading heading={content.cases.heading} />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.cases.items.map((item, i) => (
            <article key={i} className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              {/* Before/After 이미지 placeholder */}
              <div className="grid grid-cols-2 gap-px bg-black/10">
                {["BEFORE", "AFTER"].map((label) => (
                  <div
                    key={label}
                    className="flex aspect-[4/3] items-center justify-center bg-slate-100 text-xs font-bold tracking-wider text-slate-400"
                  >
                    {label}
                  </div>
                ))}
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-brand/5 px-3 py-1 text-xs font-bold text-brand">
                  {item.industry}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.summary}</p>
                <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-black/[0.06] pt-4 text-center">
                  <Stat label="면적" value={item.size} />
                  <Stat label="비용대" value={item.costRange} />
                  <Stat label="기간" value={item.duration} />
                </dl>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ============ 7. 고객 후기 ============ */}
      <Section tinted>
        <SectionHeading heading={content.testimonials.heading} />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {content.testimonials.items.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <blockquote className="text-[15px] leading-relaxed text-slate-700">
                “{t.comment}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-bold text-brand">
                {t.name}
                <span className="ml-2 font-normal text-slate-400">
                  {t.industry} · {t.region}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* ============ 8. FAQ ============ */}
      <Section>
        <SectionHeading heading={content.faq.heading} />
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion items={content.faq.items} />
        </div>
      </Section>

      {/* ============ 9. 최종 CTA ============ */}
      <section id="apply-form" className="scroll-mt-6 bg-brand text-white">
        <div className="mx-auto max-w-content px-5 py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading heading={content.finalCta.heading} align="left" onDark />
              {/* 신뢰 배지 반복 노출 (Hero와 동일) */}
              <div className="mt-6">
                <TrustBadges badges={content.hero.badges} onDark />
              </div>
              <div className="mt-8">
                <CtaButtons
                  phone={contact.phone}
                  kakaoUrl={contact.kakaoUrl}
                  formUrl={contact.formUrl}
                  layout="stack"
                  onDark
                />
              </div>
            </div>
            <ApplyForm />
          </div>
        </div>
      </section>

      {/* 모바일 하단 고정 CTA */}
      <StickyMobileCta contact={contact} />
    </main>
  );
}

/** 섹션 공통 래퍼 — 일관된 좌우 패딩/세로 여백, tinted면 옅은 배경 */
function Section({ children, tinted = false }: { children: React.ReactNode; tinted?: boolean }) {
  return (
    <section className={tinted ? "bg-slate-50" : "bg-white"}>
      <div className="mx-auto max-w-content px-5 py-16 sm:py-20">{children}</div>
    </section>
  );
}

/** 시공 사례 카드의 통계 항목 */
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-slate-400">{label}</dt>
      <dd className="mt-0.5 text-sm font-bold text-brand">{value}</dd>
    </div>
  );
}
