import type { SectionHeading as SectionHeadingType } from "@/data/types";

/** 섹션 상단 제목 블록 (eyebrow + 제목 + 부제). 가운데 정렬 기본. */
export function SectionHeading({
  heading,
  align = "center",
  onDark = false,
}: {
  heading: SectionHeadingType;
  align?: "center" | "left";
  onDark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}>
      {heading.eyebrow && (
        <p className={`mb-2 text-sm font-bold ${onDark ? "text-accent" : "text-accent-dark"}`}>
          {heading.eyebrow}
        </p>
      )}
      <h2
        className={`text-2xl font-extrabold leading-snug sm:text-3xl ${
          onDark ? "text-white" : "text-brand"
        }`}
      >
        {heading.title}
      </h2>
      {heading.subtitle && (
        <p className={`mt-3 text-base ${onDark ? "text-white/80" : "text-slate-600"}`}>
          {heading.subtitle}
        </p>
      )}
    </div>
  );
}
