self.addEventListener("install", e=> {
    e.waitUntil(
        caches.open("staticthingy").then(cache => {
            return cache.addAll([".", "/app/assets/favicon_orange.png"]);
        })
    );
});

self.addEventListener("fetch", e => {
    console.log(`Intercepting fetch request for: ${e.request.url}`)
});
//Check "."?
