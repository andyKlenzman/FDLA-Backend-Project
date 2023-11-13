export const fetchWithTimeout = (url, timeout = 6000) => {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error("timeout")), timeout);
    }),
  ]);
};
