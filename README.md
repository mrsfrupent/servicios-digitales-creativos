# Andrea · Servicios digitales y creativos

Web personal estática (HTML + CSS + JS, sin dependencias ni llamadas a terceros).

## Estructura

| Archivo / carpeta  | Qué contiene |
|--------------------|--------------|
| `index.html`       | Web en español |
| `en/index.html`    | Web en inglés |
| `aviso-legal.html` | Aviso legal (LSSI) — **plantilla, rellena tus datos** |
| `privacidad.html`  | Política de privacidad (RGPD) — **plantilla, rellena tus datos** |
| `styles.css`       | Colores, tipografía y diseño. Paleta Bauhaus (rojo, amarillo, azul, negro, crema) + rosa y pasteles, al principio en `:root` |
| `script.js`        | Configuración (`CONFIG`), menú, buscador “¿Cuál es tu problema?” (textos ES/EN), formulario y estadísticas |
| `fonts/`           | Tipografía Jost alojada en la propia web (licencia OFL en `fonts/OFL.txt`) |
| `assets/`          | Imágenes de vista previa al compartir (`og-image.png` ES, `og-image-en.png` EN) |

## Configuración pendiente (en `script.js`, objeto `CONFIG`)

### Formulario de contacto — Formspree
1. Crea una cuenta gratis en <https://formspree.io> con `montesgz@gmail.com`.
2. Crea un formulario nuevo; te dará una dirección tipo `https://formspree.io/f/abcd1234`.
3. Pega `abcd1234` en `formspreeId`.

Mientras esté vacío, el formulario **ya funciona**: abre el programa de correo del visitante con el mensaje preparado.

### Estadísticas — GoatCounter (gratis, sin cookies, no necesita banner)
1. Crea una cuenta en <https://www.goatcounter.com> y elige un código (p. ej. `andrea` → `andrea.goatcounter.com`).
2. Pega ese código en `goatcounterCode`.

## Textos pendientes

- `aviso-legal.html` y `privacidad.html`: todo lo marcado en rosa (`[NOMBRE Y APELLIDOS]`, `[NIF]`, `[DIRECCIÓN…]`, `[FECHA]`, plazo de conservación).
- Foto: sustituir el avatar con la “A” por una imagen real (en las dos versiones de idioma).
- Intereses (chips) y textos de “Quién soy”.

## Si cambias de dominio

Las direcciones `https://mrsfrupent.github.io/servicios-digitales-creativos/` de las etiquetas `og:*`, `canonical` y `hreflang` (en `index.html` y `en/index.html`) deben cambiarse por el nuevo dominio para que la vista previa al compartir siga funcionando.

## Verla en local

Ejecuta `python3 -m http.server` en esta carpeta y visita <http://localhost:8000>.

## Publicarla gratis (GitHub Pages)

Settings → Pages → *Deploy from a branch* → `main` / `(root)`.
