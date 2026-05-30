import type { ProjectContent } from "../../types";

export default {
  title: "Plataforma de Suscripción",
  theme: "dark",
  tags: ["php", "mysql", "docker"],
  description:
    "Plataforma de suscripción con cumplimiento regulatorio para +8 sitios: verificación biométrica de edad (reconocimiento facial + OCR con VerifyMe API — 100% compliance), geo-blocking para 5 países EU y 23 estados USA con contenido condicional por jurisdicción, y facturación centralizada con CCBill, SegPay y Epoch (suscripciones recurrentes + webhooks).<br/><br/>Construida sobre PHP + mensajería NATS con FFmpeg para procesamiento de media. Gestiona miles de suscriptores activos en múltiples regiones con trazabilidad completa para auditorías regulatorias.",
  components: [],
} as const satisfies ProjectContent;
