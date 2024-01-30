self.addEventListener("install", e=> {
    e.waitUntil(
        caches.open("staticthingy").then(cache => {
            return cache.addAll([".", "/app/assets/favicon_orange.png"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
//Check "."?
