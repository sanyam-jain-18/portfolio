import type { ComponentType } from "react";
import { CompositionDiagram } from "@/components/diagrams/composition-diagram";
import { ReduxSliceDonut } from "@/components/diagrams/redux-slice-donut";
import { DomainModelEr } from "@/components/diagrams/domain-model-er";

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  repoUrl: string;
  visual: ComponentType;
};

export const projects: Project[] = [
  {
    slug: "ts-web-framework",
    title: "A hand-rolled TS web framework",
    blurb:
      "Built the bones of an MVC framework in TypeScript — Model, View, Collection, Sync, Eventing — with proper generics and composition. The kind of project that teaches you what React/Backbone actually do under the hood.",
    tags: ["TypeScript", "Generics", "MVC", "From scratch"],
    repoUrl: "https://github.com/sanyam-jain-18/Web-Framework",
    visual: CompositionDiagram,
  },
  {
    slug: "fashion-shopping-site",
    title: "Fashion shopping storefront",
    blurb:
      "A full Next.js storefront — Redux Toolkit with four slices, Firebase auth + Firestore, redux-persist cart hydration, Storybook component library, lazy-loaded imagery, and Google Maps for store finder.",
    tags: ["Next.js", "Redux Toolkit", "Firebase", "Storybook", "MUI"],
    repoUrl: "https://github.com/sanyam-jain-18/shopping-site-with-nextjs",
    visual: ReduxSliceDonut,
  },
  {
    slug: "dev-connector",
    title: "Dev Connector — engineer social network",
    blurb:
      "MERN-stack LinkedIn for engineers: Express + Mongoose with a multi-model domain (Profile embeds experience/education arrays), JWT + bcrypt auth, GitHub API integration for repo timelines, and a React + Redux client.",
    tags: ["MERN", "Express", "Mongoose", "Redux", "JWT"],
    repoUrl: "https://github.com/sanyam-jain-18/Dev-Connector2.0",
    visual: DomainModelEr,
  },
];
