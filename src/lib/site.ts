export const site = {
  name: "Sanyam Jain",
  role: "Senior Full-Stack Engineer",
  focus: "Frontend · Mobile · AI-augmented surfaces",
  company: "Material+",
  city: "Gurgaon, India",
  pillLabel: "Currently at Material+ · Gurgaon",
  tagline:
    "Frontend-leaning, full-stack. Seven years of owning features end-to-end and sweating how they feel in the user’s hand.",
  email: "sanyamjaino98@gmail.com",
  socials: {
    github: "https://github.com/micScofield",
    linkedin: "https://www.linkedin.com/in/sanyam-jain-o98/",
    twitter: "https://twitter.com/sanyamsj",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
] as const;

export const currently = [
  {
    title: "Shipping high-scale frontend platforms",
    description:
      "Performance budgets, design-system contracts, and the un-glamorous infrastructure that keeps a frontend team fast.",
  },
  {
    title: "Hybrid mobile apps with native bridges",
    description:
      "App experiences that don’t feel like webviews wearing a costume — clean state contracts, real native modules, and an iteration loop the team can live with.",
  },
  {
    title: "Retrieval-augmented product surfaces",
    description:
      "Wiring LLMs into real product flows — hybrid retrieval, evaluation harnesses, and streaming UIs that hold up outside a demo.",
  },
] as const;
