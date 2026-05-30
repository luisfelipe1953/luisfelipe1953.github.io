import type { ProjectContent } from "../../types";

export default {
  title: "Subscription Platform",
  theme: "dark",
  tags: ["php", "mysql", "docker"],
  description:
    "Regulatory-compliant subscription platform powering 8+ sites with biometric age verification (facial recognition + OCR via VerifyMe API — 100% compliance), geo-blocking for 5 EU countries and 23 US states with jurisdiction-based conditional content, and centralized billing with CCBill, SegPay and Epoch (recurring subscriptions + webhooks).<br/><br/>Built on a PHP + NATS messaging architecture with FFmpeg for media processing. Handles thousands of active subscribers across multiple regions with full audit trail for regulatory reviews.",
  components: [],
} as const satisfies ProjectContent;
