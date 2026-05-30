import type { ProjectContent } from "../../types";

export default {
  title: "ERP DIAN",
  theme: "dark",
  tags: ["laravel", "php", "mysql", "docker"],
  description:
    "Multi-company ERP integrated with Colombia's DIAN tax authority, generating 500+ electronic invoices per day with automatic XML/PDF output. Includes a Kardex + Dropshipping module with multi-warehouse inventory and real-time sync with WooCommerce and Shopify via webhooks.<br/><br/>Optimized critical SQL reports from 12s to 2s response time. Refactored 8K lines of legacy code applying SOLID principles — reducing bug rate by 60%. Built under Scrum with Laravel 9–10, Node.js, Redis and Docker.",
  components: [],
} as const satisfies ProjectContent;
