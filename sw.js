// Service worker minimal — nécessaire pour que le navigateur propose "Installer l'application".
// Ne met rien en cache : l'app a besoin d'internet (Google Sign-In, Google Drive), donc pas de mode hors-ligne.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
