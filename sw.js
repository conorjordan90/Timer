self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  clients.claim();
});
// Pass-through fetch (kept minimal to satisfy install heuristics)
self.addEventListener('fetch', () => {});
