import { Phone, MessageCircle, PencilLine } from "lucide-react";

/**
 * CtaButtons — 전 페이지 공통 재사용 CTA 컴포넌트
 * ================================================================
 * "전화 걸기 / 카카오톡 상담 / 무료 진단 신청 폼" 3개 버튼.
 * props로 연락처를 받으므로 다른 서비스 랜딩페이지에서도 그대로 사용 가능.
 *
 * @example
 * <CtaButtons phone="010-1234-5678" kakaoUrl="https://..." formUrl="#apply-form" />
 */
export interface CtaButtonsProps {
  phone: string;
  kakaoUrl: string;
  /** 신청 폼 링크 또는 페이지 내 앵커(#apply-form) */
  formUrl: string;
  /** 레이아웃: 가로 정렬(row) 또는 세로 정렬(stack). 기본 row */
  layout?: "row" | "stack";
  /** 색 대비용: 어두운 배경 위에 올릴 때 true */
  onDark?: boolean;
  className?: string;
}

/** "010-0000-0000" → "01000000000" (tel: 링크용) */
function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}

export function CtaButtons({
  phone,
  kakaoUrl,
  formUrl,
  layout = "row",
  onDark = false,
  className = "",
}: CtaButtonsProps) {
  const container =
    layout === "stack"
      ? "flex flex-col gap-3"
      : "flex flex-col gap-3 sm:flex-row sm:flex-wrap";

  const baseBtn =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-base font-bold transition-transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2";

  return (
    <div className={`${container} ${className}`}>
      {/* 1. 전화 걸기 — 가장 즉각적인 전환 경로라 강조색(accent) 사용 */}
      <a
        href={toTelHref(phone)}
        className={`${baseBtn} bg-accent text-white shadow-lg shadow-accent/30 hover:bg-accent-dark focus:ring-accent`}
        aria-label={`전화 걸기 ${phone}`}
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        전화 상담
      </a>

      {/* 2. 카카오톡 상담 */}
      <a
        href={kakaoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseBtn} bg-kakao text-kakao-text hover:brightness-95 focus:ring-kakao`}
        aria-label="카카오톡으로 상담하기"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        카카오톡 상담
      </a>

      {/* 3. 무료 진단 신청 폼 */}
      <a
        href={formUrl}
        className={`${baseBtn} ${
          onDark
            ? "border border-white/40 bg-white/10 text-white hover:bg-white/20 focus:ring-white"
            : "border border-brand/20 bg-white text-brand hover:bg-brand/5 focus:ring-brand"
        }`}
        aria-label="무료 현장 진단 신청 폼으로 이동"
      >
        <PencilLine className="h-5 w-5" aria-hidden="true" />
        무료 진단 신청
      </a>
    </div>
  );
}
