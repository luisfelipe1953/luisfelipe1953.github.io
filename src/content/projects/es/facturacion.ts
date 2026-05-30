import type { ProjectContent } from "../../types";

export default {
  title: "Facturación Municipal",
  theme: "dark",
  tags: ["laravel", "php", "mysql", "vue"],
  description:
    "Sistema de facturación multi-tenant para servicios públicos de 3 municipios, procesando ~50K recibos/mes. Automatizó un proceso manual de 3 días reduciéndolo a menos de 2 horas — un 96% de reducción en tiempo de procesamiento.<br/><br/>Genera 1.000 PDFs en menos de 5 minutos con DomPDF y colas de Laravel, e incluye panel administrativo con reportes de recaudación, cartera por vencer y dashboards por municipio. Construido con Laravel 10, Livewire 3, Tailwind CSS y PostgreSQL.",
  components: [],
} as const satisfies ProjectContent;
