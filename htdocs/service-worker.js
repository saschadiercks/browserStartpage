var CACHE_NAME = "2021-04-11";
var REQUIRED_FILES = [
  "./assets/css/site.css",
  "./assets/js/site.js",
  "./assets/wallpaper/default.jpg"
];

self.addEventListener("install", function(event) {
  // Perform install step:  loading each required file into cache
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function(cache) {
        // Add all offline dependencies to the cache
        return cache.addAll(REQUIRED_FILES);
      })
      .then(function() {
        // At this point everything has been cached
        return self.skipWaiting();
      })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return the response from the cached version
      if (response) {
        return response;
      }

      // DevTools opening will trigger these o-i-c requests, which this SW can't handle.
      // There's probaly more going on here, but I'd rather just ignore this problem. :)
      // https://github.com/paulirish/caltrainschedule.io/issues/49
      if (
        event.request.cache === "only-if-cached" &&
        event.request.mode !== "same-origin"
      )
        return;

      // Not in cache - return the result from the live server
      // `fetch` is essentially a "fallback"
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", function(event) {
  // Calling claim() to force a "controllerchange" event on navigator.serviceWorker
  event.waitUntil(self.clients.claim());
});
