self.addEventListener("install", e=> {
    e.waitUntil(
        caches.open("staticthingy").then(cache => {
            return cache.addAll(["."]);
        })
    );
});

//Check "."?
