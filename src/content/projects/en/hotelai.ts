import type { ProjectContent } from "../../types";

export default {
  title: "Hotel Intelligence Score",
  theme: "dark",
  tags: ["laravel", "php", "ai", "postgresql"],
  description:
    "AI-powered hotel reputation engine built on top of the Octopus Platform. Scrapes reviews from Booking, TripAdvisor and Google via Apify, then processes them through the Claude API and OpenAI to generate normalized quality scores per property.<br/><br/>Handles millions of reviews per batch and delivers structured scoring dashboards that inform search ranking within Octopus. Data pipelines also process 5M+ hotel images (40% storage savings) and 5M+ room descriptions in multiple languages.",
  components: [],
} as const satisfies ProjectContent;
