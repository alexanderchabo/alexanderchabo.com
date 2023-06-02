"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPage } from "@/lib/segment/analytics";

export function TrackPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    trackPage(url);
  }, [pathname, searchParams]);

  return null;
}
