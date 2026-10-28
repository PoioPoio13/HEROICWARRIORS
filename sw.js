// Service worker de Heroic Guardians: guarda el juego para que abra sin conexión.
// Para forzar una actualización en todos los móviles, cambia el número de VERSION.
const VERSION = 'hg-v1';
const CORE = ['./', './heroic-guardians-v1%20(3).html', './manifest.webmanifest', './icono-192.png', './icono-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => Promise.allSettled(CORE.map(u => c.add(u)))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET' || !r.url.startsWith(self.location.origin)) return;   // Firebase y demás: directo a la red
  e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(VERSION).then(c => c.put(r, cp)); return res; }).catch(() => caches.match(r)));
});
