import type { SiteProfile } from "../types/site";

export const siteProfile = {
  githubUrl: `https://github.com/${import.meta.env.PUBLIC_GITHUB_USERNAME || "carricks"}`,
  linkedinUrl: "https://www.linkedin.com/in/carrillodiegoeng/",
} satisfies SiteProfile;
