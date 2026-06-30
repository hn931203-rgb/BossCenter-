import {
  Hammer,
  BadgeCheck,
  Truck,
  Camera,
  FileWarning,
  Scale,
  Clock,
  ClipboardCheck,
  FileText,
  Wrench,
  KeyRound,
  Phone,
  MessageCircle,
  PencilLine,
  CheckCircle2,
  XCircle,
  type LucideIcon,
} from "lucide-react";

/**
 * 데이터 파일은 아이콘을 "문자열 이름"으로만 들고 있고,
 * 실제 lucide-react 컴포넌트 매핑은 여기서 한다. (콘텐츠 ↔ 코드 분리)
 * 새 아이콘이 필요하면 여기에 import 후 map에 추가.
 */
const iconMap: Record<string, LucideIcon> = {
  Hammer,
  BadgeCheck,
  Truck,
  Camera,
  FileWarning,
  Scale,
  Clock,
  ClipboardCheck,
  FileText,
  Wrench,
  KeyRound,
  Phone,
  MessageCircle,
  PencilLine,
  CheckCircle2,
  XCircle,
};

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const LucideComponent = iconMap[name] ?? BadgeCheck;
  return <LucideComponent className={className} aria-hidden="true" />;
}
