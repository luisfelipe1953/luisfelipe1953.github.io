import type { ProjectContent } from "../../types";

export default {
  title: "ERP DIAN",
  theme: "dark",
  tags: ["laravel", "php", "mysql", "docker"],
  description:
    "ERP multi-empresa integrado con la DIAN colombiana, generando +500 facturas electrónicas diarias con salida automática en XML/PDF. Incluye módulo de Kárdex + Dropshipping con inventarios multi-bodega y sincronización en tiempo real con WooCommerce y Shopify mediante webhooks.<br/><br/>Optimicé reportes SQL críticos de 12s a 2s de respuesta. Refactoricé 8K líneas de código legacy aplicando principios SOLID — reduciendo los bugs en un 60%. Desarrollado bajo Scrum con Laravel 9–10, Node.js, Redis y Docker.",
  components: [],
} as const satisfies ProjectContent;
