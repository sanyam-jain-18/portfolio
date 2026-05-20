import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/brand-icons";
import { site } from "@/lib/site";

const links = [
  { href: site.socials.github, label: "GitHub", Icon: GithubIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: site.socials.twitter, label: "Twitter", Icon: TwitterIcon },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 mt-24">
      <div className="container-page py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
        <ul className="flex items-center gap-4">
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-muted hover:text-accent transition-colors inline-flex items-center justify-center w-9 h-9 rounded"
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
