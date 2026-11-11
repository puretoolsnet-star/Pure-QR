import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  Contact,
  FileText,
  Link2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Printer,
  QrCode,
  ScanLine,
  Share2,
  Smartphone,
  Stamp,
  TableProperties,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";

import { TOOL_CATEGORIES, type ToolCategoryId } from "@/i18n/config";
import type { ToolId } from "@/i18n/types";

export { TOOL_CATEGORIES, type ToolCategoryId };

export const TOOL_ICONS: Record<ToolId, LucideIcon> = {
  generator: QrCode,
  wifi: Wifi,
  vcard: Contact,
  menu: UtensilsCrossed,
  email: Mail,
  sms: MessageSquare,
  phone: Phone,
  location: MapPin,
  socials: Share2,
  "multi-link": Link2,
  event: CalendarDays,
  "pdf-qr": FileText,
  "app-store": Smartphone,
  "logo-qr": Stamp,
  "bulk-qr": TableProperties,
  scanner: ScanLine,
  "pdf-print": Printer,
};

export function toolsInCategory(categoryId: ToolCategoryId): readonly ToolId[] {
  return TOOL_CATEGORIES.find((c) => c.id === categoryId)?.toolIds ?? [];
}
