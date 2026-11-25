/**
 * Root layout that wraps every page in the shared <html> and <body> shell.
 * Loads the global stylesheet and sets the site-wide title and description.
 */

import type { Metadata } from "next";
import "./globals.css";

/** Site metadata */
export const metadata: Metadata = {
  title: "Douglas Dickens | Portfolio",
  description: "Portfolio of Douglas Dickens, software developer.",
};

/** Root layout */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
