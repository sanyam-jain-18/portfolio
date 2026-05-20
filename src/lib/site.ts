export const site = {
  name: "Sanyam Jain",
  role: "Senior Software Engineer / Architect",
  location: "Bengaluru, India",
  tagline:
    "I build resilient web platforms — backend architecture, frontend performance, and AI-augmented product surfaces.",
  email: "sanyamjaino98@gmail.com",
  socials: {
    github: "https://github.com/micScofield",
    linkedin: "https://www.linkedin.com/in/sanyam-jain-o98/",
    twitter: "https://twitter.com/sanyamsj",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
