import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/brand-icons";
import { site } from "@/lib/site";

const socials = [
  { href: site.socials.github, label: "GitHub", Icon: GithubIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: site.socials.twitter, label: "Twitter", Icon: TwitterIcon },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
];

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/about#resume" },
  { label: "Contact", href: "/about#contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/70 bg-surface/20">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          <div>
            <p className="font-semibold text-foreground tracking-tight">
              {site.name}
            </p>
            <p className="mt-2 text-sm text-muted leading-relaxed max-w-xs">
              {site.role} at {site.company}, {site.city}. Seven years of
              shipping production-grade product surfaces.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-2 mb-4">
              Navigate
            </p>
            <ul className="space-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-2 mb-4">
              Elsewhere
            </p>
            <ul className="flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    aria-label={label}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-muted hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-2 font-mono">{site.email}</p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border/60">
          <p className="text-xs text-muted-2 font-mono">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
