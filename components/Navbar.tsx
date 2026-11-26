/**
 * Site navbar that sticks to the top of every page.
 * Shows the section links on desktop and folds them into a menu button on phones, as in A2.
 */

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/** Section links */
const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#how", label: "How I work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#offhours", label: "Off hours" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  /** Close the menu on Escape or when the screen widens to desktop */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 768px)");
    const onWiden = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onWiden);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onWiden);
    };
  }, []);

  return (
    <header className="sticky top-0 z-10 border-b-2 border-subtle bg-page">
      <nav aria-label="Main" className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 md:px-8">
        {/** Name */}
        <Link href="/#about" className="text-[22px] font-black uppercase tracking-[0.02em] text-primary md:text-[26px]">
          Douglas Dickens
        </Link>

        {/** Desktop links */}
        <div className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-1 text-muted transition-[color,box-shadow] duration-150 hover:text-primary hover:shadow-[inset_0_-3px_0_var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/** Phone menu button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center border-2 border-strong bg-card text-primary md:hidden"
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/** Phone dropdown */}
      {open && (
        <div id="mobile-menu" className="border-t-2 border-subtle bg-page md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b-2 border-subtle py-4 pl-5 pr-8 text-right text-lg text-muted last:border-b-0 hover:bg-card hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
