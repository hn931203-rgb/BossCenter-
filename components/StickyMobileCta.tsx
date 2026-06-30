import { Phone, MessageCircle, PencilLine } from "lucide-react";
import type { ContactInfo } from "@/data/types";

/**
 * 모바일 하단 고정 CTA 바.
 * 데스크톱(sm 이상)에서는 숨기고, 모바일에서만 화면 하단에 항상 노출된다.
 * 타겟 고객이 급한 상황에서 모바일로 바로 전화하는 경우가 많은 점을 반영.
 */
function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}

export function StickyMobileCta({ contact }: { contact: ContactInfo }) {
  const item =
    "flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-bold";

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur sm:hidden">
      <div className="flex items-stretch divide-x divide-black/10">
        <a href={toTelHref(contact.phone)} className={`${item} text-accent`} aria-label="전화 상담">
          <Phone className="h-5 w-5" aria-hidden="true" />
          전화
        </a>
        <a
          href={contact.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} text-[#3b1e1e]`}
          aria-label="카카오톡 상담"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          카톡
        </a>
        <a href={contact.formUrl} className={`${item} text-brand`} aria-label="무료 진단 신청">
          <PencilLine className="h-5 w-5" aria-hidden="true" />
          진단신청
        </a>
      </div>
    </div>
  );
}
