export const trackPage = (_url: string) => {
  // TODO: type this
  if ((global as any).analytics) {
    console.log("hello");
    (global as any).analytics.page();
  }
};
