/**
 * Site footer that sits at the bottom of every page.
 * Currently a blank placeholder box in the A2 colours.
 */

import CuttingMat from "@/components/CuttingMat";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t-2 border-strong bg-page">
      <CuttingMat id="footer-mat" />
      <div className="relative mx-auto h-32 max-w-300 px-8">
        <p>Test Footer</p>
      </div>
    </footer>
  );
}
