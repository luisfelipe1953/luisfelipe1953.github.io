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
    "B2B travel platform where agencies search and book hotels, flights, experiences, transfers, tickets, car rentals, yacht charters and travel insurance in a single file. I integrated 50+ certified suppliers across 7 categories (HotelBeds, TravelGate, airlines including NDC) behind an Adapter layer over REST, SOAP and GraphQL, and built the Angular front end.<br/><br/>Scaled the platform from 5K to 50K searches per day and cut latency from 90s to 10s (−85%) with async requests, Horizon queues and multi-level Redis caching. Built a Hotel Mapping Tool that unified 1M+ hotels with fuzzy matching plus LLM review, cutting duplicates from 30% to 5%.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_home,
        alt: "Multi-product search",
        caption: "Multi-product search",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_hotel_results,
        alt: "Hotel results with filters",
        caption: "Hotel results with filters",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_hotel_detail,
        alt: "Hotel and room detail (HotelBeds)",
        caption: "Hotel and room detail (HotelBeds)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_flight_search,
        alt: "Flight search",
        caption: "Flight search",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_flight_results,
        alt: "Flight results",
        caption: "Flight results",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_experiences,
        alt: "Experiences",
        caption: "Experiences",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_yacht_results,
        alt: "Yacht charters",
        caption: "Yacht charters",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_yacht_detail,
        alt: "Boat detail with extras",
        caption: "Boat detail with extras",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: octopus_car_rental,
        alt: "Car rental",
        caption: "Car rental",
      },
    },
  ],
} as const satisfies ProjectContent;
