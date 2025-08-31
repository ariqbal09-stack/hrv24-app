// Human Rights Voice 24 - Perfect PWA Service Worker 
const CACHE_NAME = 'hrv24-perfect-v1'; 
const urlsToCache = [ 
  './', 
  './index.html', 
  './manifest.json', 
  './icon-192.png', 
  './icon-512.png' 
]; 
 
// Install event with immediate activation 
self.addEventListener('install', e => { 
  console.log('🔧 SW installing...'); 
  e.waitUntil( 
    caches.open(CACHE_NAME) 
      .then(cache => { 
        console.log('📦 Caching app shell'); 
        return cache.addAll(urlsToCache); 
      }) 
      .then() => { 
        console.log('✅ Cache complete, skipping waiting'); 
        return self.skipWaiting(); 
      }) 
  ); 
}); 
 
// Activate event with client claiming 
self.addEventListener('activate', e => { 
  console.log('✅ SW activated'); 
  e.waitUntil( 
    self.clients.claim().then() => { 
      console.log('🎯 SW now controlling all clients'); 
    }) 
  ); 
}); 
 
// Enhanced fetch event with proper error handling 
self.addEventListener('fetch', e => { 
  e.respondWith( 
    caches.match(e.request) 
      .then(response => { 
        if (response) { 
          return response; 
        } 
        return fetch(e.request).catch() => { 
          console.log('🔄 Network failed, serving from cache'); 
          return caches.match('./index.html'); 
        }); 
      }) 
  ); 
}); 
