export const aboutDestinations = [
  {
    slug: "experience",
    label: "Experience",
    icon: "code",
    title: "Engineering in Critical Systems",
    summary:
      "A concise view of my work across industrial automation, power generation, systems integration and control environments.",
  },
  {
    slug: "academic",
    label: "Academic",
    icon: "academic",
    title: "An International Learning Journey",
    summary:
      "Academic projects and research that connect robotics, machine learning and engineering practice.",
  },
  {
    slug: "international",
    label: "International",
    icon: "globe",
    title: "Global Engineering Perspective",
    summary:
      "A growing record of technical collaboration across Europe and Latin America, shaped by different industries, teams and operating contexts.",
  },
] as const;

export type AboutDestination = (typeof aboutDestinations)[number];
