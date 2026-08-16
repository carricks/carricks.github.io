export const aboutDestinations = [
  {
    slug: "experience",
    number: "01",
    label: "Experience",
    icon: "code",
    title: "Engineering in Critical Systems",
    summary:
      "A concise view of my work across industrial automation, power generation, systems integration and control environments.",
  },
  {
    slug: "international",
    number: "02",
    label: "International",
    icon: "globe",
    title: "Global Engineering Perspective",
    summary:
      "A growing record of technical collaboration across Europe and Latin America, shaped by different industries, teams and operating contexts.",
  },
  {
    slug: "academic",
    number: "03",
    label: "Academic",
    icon: "academic",
    title: "An International Learning Journey",
    summary:
      "Academic projects and research that connect robotics, machine learning and engineering practice.",
  },
  {
    slug: "accomplishment",
    number: "04",
    label: "Accomplishment",
    icon: "trophy",
    title: "Technical Milestones and Recognition",
    summary:
      "Selected academic work, technical competitions and personal milestones that sit alongside my professional engineering practice.",
  },
] as const;

export type AboutDestination = (typeof aboutDestinations)[number];
