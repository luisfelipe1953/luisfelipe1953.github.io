import qa_summary from "../../../assets/images/projects/qa/qa-summary.webp";
import qa_sessions from "../../../assets/images/projects/qa/qa-sessions.webp";
import qa_session_detail from "../../../assets/images/projects/qa/qa-session-detail.webp";
import qa_run_detail from "../../../assets/images/projects/qa/qa-run-detail.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "QA Dashboard",
  theme: "dark",
  tags: ["typescript", "node", "mysql"],
  description:
    "End-to-end test framework built with Playwright + TypeScript for the travel platform, running against real staging: search, single and multi-room hotel bookings, transfers, experiences and cancellations, with multi-supplier flows, dynamic forms and API checks.<br/><br/>I also built a dashboard in Node.js + MySQL/Prisma where non-technical QA staff create and edit test cases, launch runs with live logs, and review each run's recording, backend calls and vouchers, all without touching code.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: qa_summary,
        alt: "Suite overview",
        caption: "Suite overview",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: qa_sessions,
        alt: "Sessions by provider",
        caption: "Sessions by provider",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: qa_session_detail,
        alt: "Test cases in a session",
        caption: "Test cases in a session",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: qa_run_detail,
        alt: "Run detail: recording, backend calls and history",
        caption: "Run detail: recording, backend calls and history",
      },
    },
  ],
} as const satisfies ProjectContent;
