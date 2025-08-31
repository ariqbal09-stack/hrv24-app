const CACHE_NAME = 'hrv24-v1'; 
const urlsToCache = ['/hrv24-app/', '/hrv24-app/index.html', '/hrv24-app/manifest.json', '/hrv24-app/icon-192.png']; 
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)))); 
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)))); 
