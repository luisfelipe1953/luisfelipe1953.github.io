export const social = [
  { url: "mailto:luisfelipefernandezbetancur@gmail.com", name: "mail" },
  { url: "https://github.com/luisfelipe1953", name: "github" },
  { url: "https://www.linkedin.com/in/luisfelipefb/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
