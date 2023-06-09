"use client";

import Script from "next/script";
import { renderSnippet } from "@/lib/segment/snippet";
import { trackPage } from "@/lib/segment/utils";
import { useEffect } from "react";

import { usePathname, useSearchParams } from "next/navigation";

export const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    trackPage(url);
  }, [pathname, searchParams]);

  return (
    <Script
      id="segment-script"
      dangerouslySetInnerHTML={{
        __html: renderSnippet(),
      }}
      strategy="afterInteractive"
    />
  );
};
