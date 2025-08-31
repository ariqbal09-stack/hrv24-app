const CACHE_NAME = 'hrv24-ultimate-v1'; 
const urlsToCache = ['/', '/index.html', '/manifest.json', '/app-icon-192.png', '/app-icon-512.png']; 
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
