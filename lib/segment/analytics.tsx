export const trackPage = () => {
  // TODO: type this
  if ((global as any).analytics) {
    (global as any).analytics.page();
  }
};
