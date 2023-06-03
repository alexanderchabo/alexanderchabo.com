export const trackPage = (_url: string) => {
  // TODO: type this
  if ((global as any).analytics) {
    (global as any).analytics.page();
  }
};
