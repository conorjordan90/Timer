const CACHE_NAME = 'timer-app-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest'
];

// Install service worker and cache assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => {
      self.skipWaiting();
    })
  );
});

// Clean up old caches on activation
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      clients.claim();
    })
  );
});

// Serve from cache when offline, fetch from network when online
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(e.request)
        .then((networkResponse) => {
          // Optionally cache new requests here if desired
          return networkResponse;
        })
        .catch(() => {
          // Optionally return a fallback page or asset
        });
    })
  );
});
