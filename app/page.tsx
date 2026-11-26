/**
 * Home page served at the root route ("/").
 * Lays out a blank box for each A2 section, in page order, ready to be built out.
 */

export default function Home() {
  return (
    <main className="flex-1">
      {/** About */}
      <section id="about" className="mx-auto max-w-300 px-8 py-20">
        {/* Status Box */}
        <div className="min-h-50 border-2 border-strong bg-card"></div>
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
