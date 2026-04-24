import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { MotionShell } from "@/components/motion-shell";
import { AmbientOrbs, Footer, TopBar } from "@/components/site-chrome";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Kivu Creative | Luxury Interior Design & Furniture",
  description:
    "Luxury furniture, full-home furnishing, and artisan renovation presented through an immersive interior design experience."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${manrope.variable} bg-[var(--background)] text-[var(--text)] antialiased`}>
        <MotionShell />
        <AmbientOrbs />
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
