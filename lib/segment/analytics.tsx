import { AnalyticsBrowser } from "@segment/analytics-next";

if (!process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY) {
  throw new Error("Missing NEXT_PUBLIC_SEGMENT_WRITE_KEY");
}

const analytics = AnalyticsBrowser.load(
  {
    writeKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
  },
  {
    initialPageview: true,
  }
);

export const trackPage = (url: string) => {
  analytics.page(url);
};
