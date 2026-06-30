import { CheckCircle2, XCircle } from "lucide-react";
import type { ComparisonTable } from "@/data/types";

/**
 * 2열 비교표. 왼쪽(부정/일반)은 X, 오른쪽(권장/우리)은 ✓ 로 시각화.
 * "해결 방법" 섹션과 "차별성" 섹션에서 공통 재사용.
 */
export function ComparisonTableView({ table }: { table: ComparisonTable }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 shadow-sm">
      {/* 헤더 */}
      <div className="grid grid-cols-2 sm:grid-cols-[1.1fr_1fr_1fr]">
        <div className="hidden bg-slate-50 px-5 py-4 sm:block" />
        <div className="bg-slate-100 px-4 py-4 text-center text-sm font-bold text-slate-500 sm:text-base">
          {table.leftTitle}
        </div>
        <div className="bg-brand px-4 py-4 text-center text-sm font-bold text-white sm:text-base">
          {table.rightTitle}
        </div>
      </div>

      {/* 행 */}
      <div className="divide-y divide-black/[0.06]">
        {table.rows.map((row, i) => (
          <div key={i} className="grid grid-cols-2 sm:grid-cols-[1.1fr_1fr_1fr]">
            {/* 항목명 — 모바일에서는 행 위에 별도 표시 */}
            <div className="col-span-2 bg-slate-50/70 px-5 pt-3 text-xs font-bold text-brand sm:col-span-1 sm:flex sm:items-center sm:bg-transparent sm:pt-0 sm:text-sm">
              {row.label}
            </div>
            <div className="flex items-start gap-2 px-4 py-3 text-sm text-slate-500">
              <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" aria-hidden="true" />
              <span>{row.left}</span>
            </div>
            <div className="flex items-start gap-2 bg-brand/[0.04] px-4 py-3 text-sm font-medium text-brand">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                aria-hidden="true"
              />
              <span>{row.right}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
