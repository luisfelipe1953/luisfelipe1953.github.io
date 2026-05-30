import type { ProjectContent } from "../../types";

export default {
  title: "Municipal Billing",
  theme: "dark",
  tags: ["laravel", "php", "mysql", "vue"],
  description:
    "Multi-tenant billing system for public utilities serving 3 municipalities, processing ~50K receipts per month. Automated a 3-day manual process down to under 2 hours — a 96% reduction in processing time.<br/><br/>Generates 1,000 PDFs in under 5 minutes using DomPDF with Laravel queues, and includes an admin panel with collection reports, portfolio aging, and per-municipality dashboards. Built with Laravel 10, Livewire 3, Tailwind CSS and PostgreSQL.",
  components: [],
} as const satisfies ProjectContent;
