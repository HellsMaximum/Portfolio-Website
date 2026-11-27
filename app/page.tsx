/**
 * Home page served at the root route ("/").
 * Builds the About intro from A2 and lays out a blank box for each remaining section, in page order.
 */

import Link from "next/link";
import CuttingMat from "@/components/CuttingMat";

/** About buttons */
const buttons = [
  { href: "/#projects", label: "View projects" },
  { href: "/#contact", label: "Get in touch" },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/** About */}
      <section id="about" className="relative overflow-hidden">
        <CuttingMat id="about-mat" />
        <div className="relative mx-auto flex max-w-300 flex-col gap-14 px-8 pt-26 pb-24 md:flex-row md:items-center">
          {/** Intro */}
          <div className="flex min-w-0 flex-1 flex-col gap-5">
            <p className="font-mono text-sm uppercase tracking-widest text-accent">
              Software developer - Nanton, Alberta
            </p>
            <h1 className="text-6xl font-black uppercase leading-none text-primary md:text-7xl">
              Douglas
              <br />
              Dickens
            </h1>
            <p className="max-w-155 text-xl leading-relaxed text-body">
              Software Development student at SAIT, working towards becoming a developer who
              learns the problem first-hand, and builds the backend that solves it.
            </p>

            {/** Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              {buttons.map((button) => (
                <Link
                  key={button.href}
                  href={button.href}
                  className="inline-block border-2 border-primary px-5.5 py-3.5 text-sm font-bold text-primary transition duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-page hover:shadow-[5px_5px_0_var(--text-primary)]"
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </div>

          {/** Status box */}
          <div className="min-h-75 border-2 border-strong bg-card md:w-90 md:shrink-0"></div>
        </div>
      </section>

      {/** Projects */}
      <section id="projects" className="border-t-2 border-subtle">
        <div className="mx-auto max-w-300 px-8 py-18">
          <p>Projects</p>
        </div>
      </section>

      {/** How I work */}
      <section id="how" className="border-t-2 border-subtle bg-band">
        <div className="mx-auto max-w-300 px-8 py-18">
          <p>How I work</p>
        </div>
      </section>

      {/** Experience */}
      <section id="experience" className="border-t-2 border-subtle">
        <div className="mx-auto max-w-300 px-8 py-18">
          <p>Experience</p>
        </div>
      </section>

      {/** Off hours */}
      <section id="offhours" className="border-t-2 border-subtle bg-band">
        <div className="mx-auto max-w-300 px-8 py-18">
          <p>Off hours</p>
        </div>
      </section>
    </main>
  );
}
