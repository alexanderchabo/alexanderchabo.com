import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";

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
      <body className={inter.className}>
        <NavBar />
        <main className={styles.main}>{children}</main>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
