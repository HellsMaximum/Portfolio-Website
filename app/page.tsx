/**
 * Home page served at the root route ("/").
 * Lays out a blank box for each A2 section, in page order, ready to be built out.
 */

export default function Home() {
  return (
    <main className="flex-1">
      {/** Hero */}
      <section id="hero" className="mx-auto max-w-[1200px] px-8 py-20">
        {/* Status Box */}
        <div className="min-h-[200px] border-2 border-strong bg-card"></div>
      </section>

      {/** Projects */}
      <section id="projects" className="border-t-2 border-subtle">
        <div className="mx-auto max-w-[1200px] px-8 py-[72px]">
          <p>Projects</p>
        </div>
      </section>

      {/** How I work */}
      <section id="how" className="border-t-2 border-subtle bg-band">
        <div className="mx-auto max-w-[1200px] px-8 py-[72px]">
          <p>How I work</p>
        </div>
      </section>

      {/** Experience */}
      <section id="experience" className="border-t-2 border-subtle">
        <div className="mx-auto max-w-[1200px] px-8 py-[72px]">
          <p>Experience</p>
        </div>
      </section>

      {/** Off hours */}
      <section id="offhours" className="border-t-2 border-subtle bg-band">
        <div className="mx-auto max-w-[1200px] px-8 py-[72px]">
          <p>Off hours</p>
        </div>
      </section>
    </main>
  );
}
