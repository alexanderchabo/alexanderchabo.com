import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";

import { Analytics } from "@/lib/segment/Analytics";
import { NavBar } from "@/components/Navbar/NavBar";
import { Partytown } from "@builder.io/partytown/react";
import { segmentSnippet } from "@/lib/segment/segmentSnippet";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Partytown
          forward={[
            "dataLayer.push",
            "analytics.track",
            "analytics.page",
            "analytics.identify",
            "analytics.group",
            "analytics.reset",
            "analytics.user",
            "analytics.alias",
            "FS.identify",
            "amplitude.track",
            "amplitude.identify",
          ]}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: segmentSnippet(),
          }}
          type="text/partytown"
        />
      </head>
      <body className={inter.className}>
        <NavBar />
        <main className={styles.main}>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
