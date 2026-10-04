import thumbnailOctopus from "../../../assets/thumbnails/octopus.webp";
import thumbnailHotelai from "../../../assets/thumbnails/hotelai.webp";
import thumbnailSubscription from "../../../assets/thumbnails/subscription.webp";
import thumbnailErpdian from "../../../assets/thumbnails/erpdian.webp";
import thumbnailFacturacion from "../../../assets/thumbnails/facturacion.webp";

import thumbnailQa from "../../../assets/thumbnails/qa.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Octopus Platform",
    slug: "octopus",
    thumbnail: thumbnailOctopus,
    description: "B2B travel aggregator — 50+ suppliers, 50K searches/day",
  },
  {
    title: "QA Dashboard",
    slug: "qa",
    thumbnail: thumbnailQa,
    description: "Playwright E2E tests + Node.js dashboard",
  },
  {
    title: "Hotel Intelligence Score",
    slug: "hotelai",
    thumbnail: thumbnailHotelai,
    description: "AI-powered hotel reputation engine",
  },
  {
    title: "Subscription Platform",
    slug: "subscription",
    thumbnail: thumbnailSubscription,
    description: "Biometric verification & SaaS billing",
  },
  {
    title: "ERP DIAN",
    slug: "erpdian",
    thumbnail: thumbnailErpdian,
    description: "Electronic invoicing — 500+ invoices/day",
  },
  {
    title: "Municipal Billing",
    slug: "facturacion",
    thumbnail: thumbnailFacturacion,
    description: "50K+ receipts/month automated",
  },
] as const satisfies ProjectPreview[];
