const CACHE_NAME = 'hrv24-working-v1'; 
const urlsToCache = ['./', './index.html', './manifest.json', './icon-192.png']; 
self.addEventListener('install', e => { 
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))); 
  self.skipWaiting(); 
}); 
self.addEventListener('activate', e => { 
  e.waitUntil(self.clients.claim()); 
}); 
self.addEventListener('fetch', e => { 
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request))); 
}); 
