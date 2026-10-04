import qa_summary from "../../../assets/images/projects/qa/qa-summary.webp";
import qa_sessions from "../../../assets/images/projects/qa/qa-sessions.webp";
import qa_session_detail from "../../../assets/images/projects/qa/qa-session-detail.webp";
import qa_run_detail from "../../../assets/images/projects/qa/qa-run-detail.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Dashboard de QA",
  theme: "dark",
  tags: ["typescript", "node", "mysql"],
  description:
    "Framework de pruebas end-to-end con Playwright + TypeScript para la plataforma de viajes, que corre contra staging real: búsqueda, reserva de hotel simple y multi-habitación, traslados, experiencias y cancelaciones, con flujos multiproveedor, formularios dinámicos y validación de APIs.<br/><br/>Construí además un dashboard en Node.js + MySQL/Prisma para que el equipo de QA no técnico cree y edite casos, lance corridas con log en vivo y revise la grabación de cada run, las llamadas al backend y los vouchers, sin tocar código.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: qa_summary,
        alt: "Resumen de la suite",
        caption: "Resumen de la suite",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: qa_sessions,
        alt: "Sesiones por proveedor",
        caption: "Sesiones por proveedor",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: qa_session_detail,
        alt: "Casos de una sesión",
        caption: "Casos de una sesión",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: qa_run_detail,
        alt: "Detalle de una corrida: video, llamadas al backend e historial",
        caption: "Detalle de una corrida: video, llamadas al backend e historial",
      },
    },
  ],
} as const satisfies ProjectContent;
