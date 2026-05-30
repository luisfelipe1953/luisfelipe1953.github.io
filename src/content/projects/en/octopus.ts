import type { ProjectContent } from "../../types";

export default {
  title: "Octopus Platform",
  theme: "dark",
  tags: ["laravel", "php", "redis", "postgresql"],
  live: "https://moebius.travel",
  description:
    "B2B travel search engine unifying 28+ certified international providers across 7 categories (hotels, flights, car rental, tours, transfers, tickets, insurance) into a single API layer.<br/><br/>Scaled the platform from 5K to 50K daily searches with no degradation — reducing latency from 8s to 1.2s (85%) and query count from 150 to 12 per request (92%). Built a Hotel Mapping Tool that unified 1M+ hotels using Levenshtein + Haversine algorithms, cutting duplicates from 30% to 5%. Implemented multi-level Redis cache (70% fewer API calls) and circuit breakers with retry logic (40% fewer errors).",
  components: [],
} as const satisfies ProjectContent;
