import type { ProjectContent } from "../../types";

export default {
  title: "Octopus Platform",
  theme: "dark",
  tags: ["laravel", "php", "redis", "postgresql"],
  live: "https://moebius.travel",
  description:
    "Motor de búsqueda B2B para turismo que unifica +28 proveedores certificados en 7 categorías (hoteles, aéreos, rent-a-car, tours, transfers, tickets, seguros) en una sola capa de API.<br/><br/>Escalé la plataforma de 5K a 50K búsquedas/día sin degradación — reduciendo la latencia de 8s a 1.2s (85%) y las queries de 150 a 12 por búsqueda (92%). Construí un Hotel Mapping Tool que unificó 1M+ hoteles con algoritmos Levenshtein + Haversine, reduciendo duplicados del 30% al 5%. Implementé caché multi-nivel con Redis (70% menos llamadas) y circuit breakers con retry logic (40% menos errores).",
  components: [],
} as const satisfies ProjectContent;
