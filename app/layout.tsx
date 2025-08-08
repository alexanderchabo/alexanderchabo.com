import "./globals.css";
import { Inter } from "next/font/google";

import { Analytics } from "@/lib/segment/Analytics";
import { NavBar } from "@/components/Navbar/NavBar";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#f6f7f8] text-[#0f172a] antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="max-w-[50rem] mx-auto px-6 md:px-8 mb-12">
          <NavBar />
          <main
            id="main"
            className="flex flex-col pt-6 md:pt-10 leading-relaxed text-[15px] md:text-[16px] text-[#111827]"
          >
            {children}
          </main>
        </div>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
