"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

/**
 * 무료 진단 신청 폼 — 최소 입력(이름/연락처/지역/요청사항)으로 진입 장벽 최소화.
 *
 * ⚠️ 현재는 백엔드가 없어 제출 시 화면 내 완료 메시지만 표시하는 데모 상태입니다.
 *   실제 연동 시 handleSubmit 내부에서 API(이메일/슬랙/DB/구글폼 등)로 전송하세요.
 */
export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: 실제 전송 로직 연동 (현재는 데모용으로 완료 상태만 표시)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 text-center text-brand">
        <CheckCircle2 className="h-12 w-12 text-accent" aria-hidden="true" />
        <p className="text-lg font-bold">신청이 접수되었습니다</p>
        <p className="text-sm text-slate-500">
          담당자가 빠르게 연락드리겠습니다. (※ 데모 화면 — 실제 전송 연동 필요)
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-black/15 px-4 py-3 text-base text-brand placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-brand">이름</span>
          <input name="name" required placeholder="홍길동" className={field} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-brand">연락처</span>
          <input
            name="phone"
            required
            type="tel"
            inputMode="tel"
            placeholder="010-1234-5678"
            className={field}
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-brand">지역</span>
        <input name="region" required placeholder="예: 서울 강남구" className={field} />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-brand">한 줄 요청사항</span>
        <input
          name="message"
          placeholder="예: 30평 카페 원상복구 견적 문의"
          className={field}
        />
      </label>
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-accent/30 transition-transform hover:bg-accent-dark active:scale-[0.98]"
      >
        무료 현장 진단 신청하기
      </button>
      <p className="text-center text-xs text-slate-400">
        제출하신 정보는 상담 목적으로만 사용됩니다.
      </p>
    </form>
  );
}
