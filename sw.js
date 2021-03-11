const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

//a list of local resources was always want cached
const PRECACHE_URLS = [
    'index.html',
    './',
    'css/style.css',
    'js/main.js'
    'sw.js'
    ];

//the install handler takes care of precaching our resources as directed
self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open(PRECACHE).then(function(cache){
      return cache.addAll(PRECACHE_URLS);
    });
  );
});

//the activate handler
self.addEventListener('activate',event => {
  console.log('service worker activating ... ');
});

//fetch handler
self.addEventListener('fetch', function(event) {
  event.respondWith{
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
  );
});
