"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPage } from "@/lib/segment/analytics";

export function TrackPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // TODO: switch logic here
    trackPage();
  }, [pathname, searchParams]);

  return null;
}
