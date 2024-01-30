self.addEventListener("install", e=> {
    e.waitUntil(
        caches.open("staticthingy").then(cache => {
            return cache.addAll([".", "/app/assets/favicon_orange.png"]);
        })
    );
});

//Check "."?
