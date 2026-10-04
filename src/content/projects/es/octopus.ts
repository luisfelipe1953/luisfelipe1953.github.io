import octopus_home from "../../../assets/images/projects/octopus/octopus-home.webp";
import octopus_hotel_results from "../../../assets/images/projects/octopus/octopus-hotel-results.webp";
import octopus_hotel_detail from "../../../assets/images/projects/octopus/octopus-hotel-detail.webp";
import octopus_flight_search from "../../../assets/images/projects/octopus/octopus-flight-search.webp";
import octopus_flight_results from "../../../assets/images/projects/octopus/octopus-flight-results.webp";
import octopus_experiences from "../../../assets/images/projects/octopus/octopus-experiences.webp";
import octopus_yacht_results from "../../../assets/images/projects/octopus/octopus-yacht-results.webp";
import octopus_yacht_detail from "../../../assets/images/projects/octopus/octopus-yacht-detail.webp";
import octopus_car_rental from "../../../assets/images/projects/octopus/octopus-car-rental.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Octopus Platform",
  theme: "dark",
  tags: ["laravel", "typescript", "redis", "ai"],
  live: "https://moebius.travel",
  description:
    "Plataforma B2B de turismo donde las agencias buscan y reservan hoteles, vuelos, experiencias, traslados, tickets, autos, yates y asistencia en un solo file. Integré +50 proveedores certificados en 7 categorías (HotelBeds, TravelGate, aerolíneas con NDC) con un patrón Adapter sobre REST, SOAP y GraphQL, y construí el front-end en Angular.<br/><br/>Escalé la plataforma de 5K a 50K búsquedas/día y bajé la latencia de 90 s a 10 s (−85 %) con Guzzle async, colas en Horizon y caché multinivel en Redis. Construí un Hotel Mapping Tool que unificó +1M hoteles con fuzzy matching y revisión con LLM, reduciendo duplicados del 30 % al 5 %.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_home,
        alt: "Buscador multiproducto",
        caption: "Buscador multiproducto",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_hotel_results,
        alt: "Resultados de hoteles con filtros",
        caption: "Resultados de hoteles con filtros",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_hotel_detail,
        alt: "Detalle de hotel y habitaciones (HotelBeds)",
        caption: "Detalle de hotel y habitaciones (HotelBeds)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_flight_search,
        alt: "Búsqueda de vuelos",
        caption: "Búsqueda de vuelos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_flight_results,
        alt: "Resultados de vuelos",
        caption: "Resultados de vuelos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_experiences,
        alt: "Experiencias",
        caption: "Experiencias",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_yacht_results,
        alt: "Alquiler de veleros",
        caption: "Alquiler de veleros",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_yacht_detail,
        alt: "Detalle de embarcación con extras",
        caption: "Detalle de embarcación con extras",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_car_rental,
        alt: "Rent a car",
        caption: "Rent a car",
      },
    },
  ],
} as const satisfies ProjectContent;
