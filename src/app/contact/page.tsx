import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/brand-icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: Mail,
    primary: true,
  },
  {
    label: "LinkedIn",
    value: "in/sanyam-jain-o98",
    href: site.socials.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "micScofield",
    href: site.socials.github,
    Icon: GithubIcon,
  },
  {
    label: "Twitter",
    value: "@sanyamsj",
    href: site.socials.twitter,
    Icon: TwitterIcon,
  },
];

export default function ContactPage() {
  return (
    <section className="container-page pt-16 sm:pt-20 pb-20 max-w-3xl">
      <p className="text-sm uppercase tracking-[0.2em] text-muted mb-4">Contact</p>
      <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
        Let&apos;s talk.
      </h1>
      <p className="mt-6 text-lg text-muted leading-relaxed">
        I&apos;m always happy to hear about interesting problems — especially
        around architecture, GenAI product surfaces, and high-scale frontend
        work. Email is the fastest path.
      </p>

      <ul className="mt-12 grid gap-px bg-border rounded-lg overflow-hidden border border-border">
        {channels.map(({ label, value, href, Icon, primary }) => (
          <li key={label} className="bg-background">
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-5 p-5 sm:p-6 hover:bg-surface transition-colors group"
            >
              <Icon
                className="w-5 h-5 text-muted group-hover:text-accent transition-colors flex-shrink-0"
                aria-hidden="true"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {label}
                </p>
                <p
                  className={`mt-1 ${
                    primary ? "text-foreground text-lg" : "text-foreground"
                  } group-hover:text-accent transition-colors truncate`}
                >
                  {value}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
