import { Analytics } from "@vercel/analytics/react";

import { NavBar } from "@/components/Navbar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alexander Chabo - Senior Fullstack Growth Engineer",
  description:
    "Experienced Senior Fullstack Growth Engineer specializing in driving scalable business growth through innovative solutions. Skilled in frontend and backend development, data analysis, and A/B testing.",
};

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
        <Analytics />
      </body>
    </html>
  );
}
