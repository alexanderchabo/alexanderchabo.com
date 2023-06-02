import { NavBar } from "@/components/Navbar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import { Suspense } from "react";
import { TrackPageViews } from "./TrackPageViews";

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
          <TrackPageViews />
        </Suspense>
      </body>
    </html>
  );
}
