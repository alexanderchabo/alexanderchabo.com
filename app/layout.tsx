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
      <body className={`${inter.className} bg-gray-200 text-black`}>
        <div className="max-w-[40rem] mx-auto px-6 mb-8">
          <NavBar />
          <main className="flex flex-col pt-4">{children}</main>
        </div>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
