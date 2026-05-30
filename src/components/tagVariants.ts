export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "laravel"
  | "php"
  | "vue"
  | "mysql"
  | "docker"
  | "typescript"
  | "ai";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  laravel: "Laravel",
  php: "PHP",
  vue: "Vue 3",
  mysql: "MySQL",
  docker: "Docker",
  typescript: "TypeScript",
  ai: "AI",
} as const satisfies Record<TagVariant, string>;
