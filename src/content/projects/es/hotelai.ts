import type { ProjectContent } from "../../types";

export default {
  title: "Hotel Intelligence Score",
  theme: "dark",
  tags: ["laravel", "php", "ai", "postgresql"],
  description:
    "Motor de reputación hotelera con IA construido sobre Octopus Platform. Extrae reseñas de Booking, TripAdvisor y Google mediante Apify y las procesa con Claude API y OpenAI para generar puntuaciones de calidad normalizadas por propiedad.<br/><br/>Procesa millones de reseñas por lote y entrega dashboards de scoring estructurados que informan el ranking de búsqueda en Octopus. Los pipelines de datos también procesan 5M+ imágenes de hoteles (40% ahorro en storage) y 5M+ descripciones de habitaciones en múltiples idiomas.",
  components: [],
} as const satisfies ProjectContent;
