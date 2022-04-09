const CACHE_DATA = "APP_VERSION_1";
const URLS_TO_CACHE = [ 'index.html', 'offline.html' ];

const routesToCache = async () => {
    const cache = await caches.open(CACHE_DATA)
    return cache.addAll([ ...URLS_TO_CACHE, 
                          './', 
                          './static/js/bundle.js', 
                          './static/css/main.chunk.css',
                          './static/js/main.chunk.js',
                          './ws'
                        ])
}

const fetchCachedRoutes = async (event) => {
    if(!navigator.onLine) return await caches.match(event.request)
    try {
        return await fetch(event.request)
    } catch (error) {
       return await caches.match('offline.html')
    }
}

this.addEventListener("install", (event) => event.waitUntil(routesToCache()))

this.addEventListener("fetch", (event) => event.respondWith(fetchCachedRoutes(event)))