"use client";

import { trackPage } from "@/lib/segment/utils";
import { useEffect } from "react";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { segmentSnippet } from "./segmentSnippet";

export const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    trackPage(url);
  }, [pathname, searchParams]);

  return (
    <Script
      id="segment"
      dangerouslySetInnerHTML={{
        __html: segmentSnippet(),
      }}
      strategy="afterInteractive"
    />
  );
};
