self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  clients.claim();
});

self.addEventListener("fetch", e => {
  // Let requests pass through to LarkSuite
});
