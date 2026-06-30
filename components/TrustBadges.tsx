import { Icon } from "./Icon";
import type { TrustBadge } from "@/data/types";

/**
 * 신뢰 요소 배지 묶음. Hero 상단과 최종 CTA에 반복 노출(동일 컴포넌트 재사용).
 * isPlaceholder 배지는 점선 테두리로 '교체 예정'임을 시각적으로 구분.
 */
export function TrustBadges({
  badges,
  onDark = false,
}: {
  badges: TrustBadge[];
  onDark?: boolean;
}) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {badges.map((badge, i) => (
        <li
          key={i}
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold ${
            onDark ? "bg-white/10 text-white" : "bg-brand/5 text-brand"
          } ${badge.isPlaceholder ? "border border-dashed border-current/40" : ""}`}
          title={badge.isPlaceholder ? "추정/예시 값 — 실제 데이터로 교체 필요" : undefined}
        >
          <Icon name={badge.icon} className="h-4 w-4" />
          {badge.label}
        </li>
      ))}
    </ul>
  );
}
