"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/50">
      <div className="container-page flex items-center justify-between h-16">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 text-foreground hover:text-foreground transition-colors"
          aria-label={`${site.name} — Home`}
        >
          <span
            aria-hidden="true"
            className="inline-block w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform"
          />
          <span className="text-sm font-semibold tracking-tight">
            {site.name}
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-1 text-sm">
              {nav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative px-3 py-2 rounded-md transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-px left-3 right-3 h-px bg-accent"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
