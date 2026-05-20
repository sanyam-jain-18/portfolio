import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border/70 bg-background/80 backdrop-blur sticky top-0 z-50">
      <div className="container-page flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
          aria-label={`${site.name} — Home`}
        >
          {site.name.toLowerCase().replace(" ", ".")}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-2 py-2 sm:px-3 rounded text-muted hover:text-foreground hover:bg-surface transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
