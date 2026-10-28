# Publicar Heroic Guardians para que la prueben otras personas

Hay 3 caminos, de más fácil a más difícil. Empieza por el 1: es gratis y no requiere cuentas de tienda.

## Camino 1 — App instalable desde el navegador (PWA) · gratis · 10 minutos
Funciona en Android (Chrome) y iPhone (Safari). Se abre a pantalla completa, con icono propio y **sin conexión**.

1. En tu repositorio de GitHub (PoioPoio13/HEROICWARRIORS) sube, junto al HTML del juego, estos archivos nuevos:
   `manifest.webmanifest`, `sw.js`, `icono-180.png`, `icono-192.png`, `icono-512.png` (los iconos están en la carpeta `iconos/`).
2. Sube también el HTML nuevo (`heroic-guardians-v1 (3).html`) — ya trae todo conectado.
3. Espera 1–2 minutos y abre el enlace del juego en el móvil:
   - **Android:** menú ⋮ de Chrome → «Instalar aplicación».
   - **iPhone:** botón Compartir → «Añadir a pantalla de inicio».
4. Pasa el enlace a tus amigos. Para que todos reciban una versión nueva, cambia `VERSION` en `sw.js` (p. ej. `hg-v2`) y súbelo.

## Camino 2 — APK de Android para probar · gratis · 30 minutos
Sirve para enviar el juego por WhatsApp/Drive y que se instale sin tienda.

1. Crea un repositorio nuevo en GitHub y sube la carpeta `heroic-guardians-app` completa más la carpeta `.github` (está en `android-workflow/`).
2. En GitHub: pestaña **Actions → Android APK → Run workflow**.
3. Al terminar (≈5 min), entra en la ejecución y descarga **heroic-guardians-debug-apk**. Dentro está `app-debug.apk`.
4. Pásalo al móvil y ábrelo (Android pedirá permitir «instalar apps desconocidas»).

## Camino 3 — Pruebas oficiales en las tiendas
**Google Play (prueba cerrada)** — cuenta de desarrollador: 25 $ una sola vez.
1. Consola de Google Play → Crear app → Prueba → *Pruebas cerradas* → sube un `.aab` (en el flujo de Camino 2 cambia `assembleDebug` por `bundleRelease` y firma el paquete; si te pierdes, dímelo y lo preparo).
2. Añade los correos de tus testers y mándales el enlace de invitación.
3. Nota: las cuentas personales nuevas deben tener **12 testers durante 14 días** antes de poder publicar para todos.

**Apple TestFlight** — cuenta de desarrollador: 99 $/año.
1. Sigue `LEEME-PASO-A-PASO.md` (Codemagic compila sin Mac con `codemagic.yaml`).
2. En App Store Connect → TestFlight → añade testers por correo o crea un enlace público (hasta 10.000 personas).
3. La primera versión pasa una revisión rápida de Apple (1–2 días).

## Antes de invitar a gente
- **Reglas del ranking:** en Firebase → Firestore → *Reglas*, pega el contenido de `firestore.rules` y publica. Sin esto, el ranking no es seguro.
- **Política de privacidad:** sube `privacy.html` actualizado (ya incluye el ranking) y rellena tu nombre y correo en los huecos `[TU NOMBRE O ALIAS]` / `[TU CORREO DE CONTACTO]`.
- **Avisa a los testers** de que el ranking es opcional y de cómo dejarte comentarios (un formulario de Google o un correo bastan).
