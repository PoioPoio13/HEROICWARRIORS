# 🪓 Timber Brawl

Juego de disparos en arena, inspirado en el estilo de **Brawl Stars**, con personajes y mecánicas propias. Construido en HTML/CSS/JavaScript puro (sin frameworks ni build tools) — cada versión es un archivo autocontenido que se abre directamente en el navegador.

> Proyecto en desarrollo activo. Este README se irá actualizando a medida que avancemos.

---

## 🧬 El gancho principal: Fusión

Timber Brawl no funciona como un brawler tradicional donde eliges un personaje de tu colección. En su lugar:

- Antes de cada partida, el sistema combina automáticamente **3 personajes base aleatorios** en una única **Fusión** jugable.
- Cada personaje base tiene 3 atributos binarios — **Inteligencia**, **Fuerza**, **Velocidad** (Alta/Baja) — dando 8 arquetipos posibles.
- Las estadísticas finales de la Fusión (vida, daño, velocidad, rango...) se generan dentro de rangos que dependen de cuántos de los 3 personajes base comparten cada atributo en alto.
- Existe una progresión por **Horas de Entrenamiento**, que sesga las probabilidades hacia fusiones más potentes sin romper el balance entre jugadores nuevos y veteranos.
- Un sistema de **rarezas** (Común → Mítica) según cuánto se alinean los atributos de los 3 personajes combinados.

El roster cuenta con **48 personajes base** (6 por arquetipo) para que las combinaciones posibles sean prácticamente ilimitadas.

---

## 📂 Contenido del repositorio

| Archivo | Qué es |
|---|---|
| `brawl-like-v1.html` | Primer prototipo jugable: Grom el Leñador contra bots, vista superior, WASD + ratón |
| `brawl-like-v2.html` | Misma base, con animación procedural de piernas/brazos y flash de pantalla al recibir daño |
| `creacion-personaje-v1.html` | Pantalla de creación de personaje (piel, pelo, ropa, arma) — solo se muestra la primera vez, guardado con `localStorage` |
| `pantalla-carga-fusion.html` | Pantalla de carga estilo "forja de Fusión", con 5 personajes del roster |
| `pantalla-carga-cyberpunk.html` | Variante de pantalla de carga en clave cyberpunk-arena, siluetas de neón |
| `sistema-fusion-diseno.md` | Documento de diseño completo del sistema de Fusión: fórmulas, progresión, rarezas y balance |
| `roster-personajes-base.md` | Los 48 personajes base organizados por arquetipo |

## 🪓 Personaje original: Grom, el Leñador

Nuestro primer héroe, que ahora forma parte del roster de 48 como uno de los "Titanes Lentos" (Fuerza alta, Inteligencia y Velocidad bajas). Lanza hachas a distancia y, tras acumular 5 golpes sobre un rival, desata un superataque de giro en área.

## 🎮 Cómo probarlo

No hace falta instalar nada: cada `.html` es independiente.

1. Clona o descarga el repositorio.
2. Abre el archivo `.html` que quieras probar directamente en el navegador.
3. Para jugar en el prototipo: **WASD** para moverte, **ratón** para apuntar, **clic izquierdo** para disparar, **espacio** para el superataque (cuando esté cargado).

*(Opcional: si activáis GitHub Pages en el repositorio, cada archivo será accesible por URL directa sin tener que descargar nada.)*

## 🛠️ Stack técnico

- HTML5 Canvas para el renderizado del juego
- CSS puro para las pantallas de UI (creación de personaje, pantallas de carga)
- JavaScript vanilla, sin dependencias externas
- `localStorage` para guardar el personaje creado entre sesiones

## 🗺️ Próximos pasos

- Conectar los rasgos guardados en la creación de personaje con el prototipo jugable (que el jugador se vea con sus propios colores en partida)
- Diseñar el super y la pasiva de cada uno de los 8 arquetipos (ahora mismo cada uno solo tiene una habilidad básica)
- Prototipar la pantalla de Fusión pre-partida (animación de combinar los 3 personajes elegidos al azar)
- Colisión real con obstáculos del mapa
- Modo 2 jugadores en local
- Sustituir las siluetas/vectores actuales por arte ilustrado (retratos estilo anime) generado con IA de imágenes

---

*Última actualización: agosto de 2026.*
