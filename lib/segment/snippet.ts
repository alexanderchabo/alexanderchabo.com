import snippet from "@segment/snippet";

export const renderSnippet = () => {
  const options = {
    apiKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
    page: false,
  };

  if (process.env.NODE_ENV === "development") {
    return snippet.max(options);
  }

  return snippet.min(options);
};
