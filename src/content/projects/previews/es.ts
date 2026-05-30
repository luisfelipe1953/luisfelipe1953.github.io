import thumbnailOctopus from "../../../assets/thumbnails/cubewar.webp";
import thumbnailHotelai from "../../../assets/thumbnails/streakon.webp";
import thumbnailSubscription from "../../../assets/thumbnails/quibbo.webp";
import thumbnailErpdian from "../../../assets/thumbnails/sharkie.webp";
import thumbnailFacturacion from "../../../assets/thumbnails/pokedex.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Octopus Platform",
    slug: "octopus",
    thumbnail: thumbnailOctopus,
    description: "Agregador B2B de viajes — 50K búsquedas/día",
  },
  {
    title: "Hotel Intelligence Score",
    slug: "hotelai",
    thumbnail: thumbnailHotelai,
    description: "Motor de reputación hotelera con IA",
  },
  {
    title: "Plataforma de Suscripción",
    slug: "subscription",
    thumbnail: thumbnailSubscription,
    description: "Verificación biométrica y facturación SaaS",
  },
  {
    title: "ERP DIAN",
    slug: "erpdian",
    thumbnail: thumbnailErpdian,
    description: "Facturación electrónica — 500+ facturas/día",
  },
  {
    title: "Facturación Municipal",
    slug: "facturacion",
    thumbnail: thumbnailFacturacion,
    description: "Más de 50K recibos/mes automatizados",
  },
] as const satisfies ProjectPreview[];
