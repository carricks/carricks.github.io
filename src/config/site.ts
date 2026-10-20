import type { SiteProfile } from "../types/site";

export const siteProfile = {
  githubUrl: `https://github.com/${import.meta.env.PUBLIC_GITHUB_USERNAME || "dc-x1"}`,
  linkedinUrl: "https://www.linkedin.com/in/carrillodiegoeng/",
} satisfies SiteProfile;
