/**
 * Site navbar that sits at the top of every page.
 * Currently a blank placeholder box in the A2 colours.
 */

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b-2 border-subtle bg-page">
      <nav className="mx-auto h-16 max-w-[1200px] px-8">
        <div className="flex items-center justify-between h-full">
          <div className="text-lg font-bold">DOUGLAS DICKENS</div>
          <div className="space-x-4">
            {/* Navigation links */}
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#how" className="hover:underline">How I work</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#offhours" className="hover:underline">Off hours</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
